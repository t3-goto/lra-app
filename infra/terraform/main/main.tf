#################################
# VPC
#################################
module "vpc" {
  source = "./modules/vpc/vpc"
  name = "vpc"
  stage = var.stage
  vpc = var.vpc
  subnet_cidr_block = var.subnet_cidr_block
  availability_zone = var.availability_zone
  eks_cluster_names = [var.eks.cluster.name]
  tag = var.tag
}

module "vpc_endpoint_secretsmanager" {
  source = "./modules/vpc/endpoint"
  endpoint_name = "secrets"
  stage = var.stage
  vpc_id = module.vpc.vpc_id
  subnets =module.vpc.public_subnets
  service_names = {
    secrets = "com.amazonaws.ap-northeast-1.secretsmanager"
  }
  tag = var.tag
}

#################################
# Route53
#################################
module "route53_zone_public" {
  source = "./modules/route53/zone_public"
  zone_name = var.dns_name.public
}

module "route53_zone_internal" {
  source = "./modules/route53/zone_private"
  vpc_id = module.vpc.vpc_id
  zone_name = var.dns_name.internal
  tag = var.tag
}

module "route53_zone_external" {
  source = "./modules/route53/zone_private"
  vpc_id = module.vpc.vpc_id
  zone_name = var.dns_name.external
  tag = var.tag
}

module "route53_alias_public" {
  source = "./modules/route53/alias"
  zone_id = module.route53_zone_public.id
  tag = var.tag
  configs = {
    alb = {
      alias_name = "www"
      original_dns_name = module.alb.dns_entry.dns_name
      original_zone_id = module.alb.dns_entry.zone_id
    }
  }
}

module "route53_cname_internal" {
  source = "./modules/route53/cname"
  zone_id = module.route53_zone_internal.id
  ttl_sec = 60
  configs = {
    lradb = {
      cname_name = "lradb"
      records = [module.rds_mysql.dns_entry]
    }
    operator = {
      cname_name = "operator"
      records = [module.ec2_operator.dns_entry.private["01"]]
    }
  }
}

module "route53_cname_public" {
  source = "./modules/route53/cname"
  zone_id = module.route53_zone_public.id
  ttl_sec = 60
  configs = {
    operator = {
      cname_name = "operator"
      records = [module.ec2_operator.dns_entry.public["01"]]
    }
  }
}

#################################
# EC2
#################################
module "ec2_operator" {
  source = "./modules/ec2/ec2"
  vpc_id = module.vpc.vpc_id
  stage = var.stage
  aws_account_id = var.aws_account_id
  secretsmanager_name = var.secretsmanager_name
  name = var.ec2.operator.name
  private_ips = var.ec2.operator.private_ips
  ami = var.ec2.operator.ami
  instance_type = var.ec2.operator.instance_type
  root_volume = var.ec2.operator.root_volume
  security_group_ids = [aws_security_group.ec2_default_security_group.id]
  associate_public_ip_address = true
  allocate_eip = true
  key_name = var.ec2_key_name
  subnets = module.vpc.public_subnets
  tag = var.tag
  user_data = <<-USERDATA
    #!/bin/bash
    aws secretsmanager get-secret-value --secret-id lra-key --query 'SecretBinary' --output text --region ap-northeast-1 | base64 -d > /home/ec2-user/.ssh/id_rsa
    chown ec2-user. /home/ec2-user/.ssh/id_rsa
    chmod 600 /home/ec2-user/.ssh/id_rsa

    # install mysql
    yum install -y https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
    yum-config-manager --disable mysql80-community
    yum-config-manager --enable mysql57-community
    yum install -y mysql-community-client

    # install docker
    amazon-linux-extras install -y docker
    systemctl start docker
    systemctl enable docker
    gpasswd -a ec2-user docker
    gpasswd -a ssm-user docker

    # install git
    yum install -y git-all

    # install terraform
    git clone https://github.com/tfutils/tfenv.git ~/.tfenv
    ln -s ~/.tfenv/bin/* /usr/local/bin
    tfenv install 0.13.4
    tfenv use 0.13.4
  USERDATA
}

#################################
# EKS
#################################
module "eks" {
  source = "./modules/eks"
  vpc_id = module.vpc.vpc_id
  stage = var.stage
  owners = var.eks_node_owners_id
  key_name = var.ec2_key_name
  public_subnets = module.vpc.public_subnets
  tag = var.tag
  config = var.eks
  aws_account_id = var.aws_account_id
}

#################################
# ALB
#################################
module "alb" {
  source = "./modules/elb/alb"
  stage = var.stage
  aws_account_id = var.aws_account_id
  ssl_cert = var.ssl_cert
  vpc_id = module.vpc.vpc_id
  public_subnets = module.vpc.public_subnets
  autoscaling_group_name = module.eks.autoscaling_group_name
  idle_timeout = 720
  tag = var.tag
}

#################################
# RDS
#################################
module "rds_mysql" {
  source = "./modules/rds/mysql"
  stage = var.stage
  vpc_id = module.vpc.vpc_id
  private_subnets = module.vpc.private_subnets
  name = var.rds_mysql.name
  username = var.rds_mysql.username
  password = var.rds_mysql.password
  instance_class = var.rds_mysql.instance_class
  backup_window = var.rds_mysql.backup_window
  maintenance_window = var.rds_mysql.maintenance_window
  tag = var.tag
}

#################################
# Security Group Rules
#################################
resource "aws_security_group" "ec2_default_security_group" {
  name_prefix = "default-ec2-sg"
  description = "Default Security Group for EC2 in VPC"
  vpc_id = module.vpc.vpc_id

  tags = {
    Name = "default-ec2"
    Project = var.tag.project
    Purpose = var.tag.purpose
  }
}

# EC2 Default Security Group Rules
module "ec2_default_security_group_rules" {
  source = "./modules/sg/rules"
  security_group_id = aws_security_group.ec2_default_security_group.id
  ingress = {
    icmp_vpc = { from = -1, to = -1, cidrs = [var.vpc.cidr_block], protocol = "icmp", desc = "Allow ICMP Protocol Traffic from VPC CIDR Blocks" }
  }
  egress = {
    all = { from = 0, to = 0, cidrs = ["0.0.0.0/0"], protocol = "-1", desc = "Allow All Outbound Traffic" }
  }
}

# VPC Endpoint SecretsManager Security Group Rules
module "vpc_endpoint_secretsmanager_security_group_rules" {
  source = "./modules/sg/rules"
  security_group_id = module.vpc_endpoint_secretsmanager.sg.id
  ingress = {
    https_vpc = { from = 443, to = 443, cidrs = [var.vpc.cidr_block], desc = "Allow HTTPS Protocol Traffic from VPC CIDR Blocks" }
  }
}

# EC2 Operator Security Group Rules
module "ec2_operator_security_group_rules" {
  source = "./modules/sg/rules"
  security_group_id = module.ec2_operator.sg.id
  ingress = {
    # ssh_any = { from = 22, to = 22, cidrs = ["0.0.0.0/0"], desc = "Allow SSH Protocol Traffic from Any" } # Unuse for SSM.
    ssh_vpc = { from = 22, to = 22, cidrs = [var.vpc.cidr_block], desc = "Allow SSH Protocol Traffic ffrom VPC CIDR Blocks" }
  }
}

# EKS Control Plane Security Group Rules
module "eks_control_plane_security_group_rules" {
  source = "./modules/sg/rules"
  security_group_id = module.eks.sg_control_plane.id
  ingress = {
    https_any = { from = 443, to = 443, cidrs = ["0.0.0.0/0"], desc = "Allow HTTPS Protocol to Communicate with the Cluster API Server" }
  }
  egress = {
    all = { from = 0, to = 0, cidrs = ["0.0.0.0/0"], protocol = "-1", desc = "Allow All Outbound Traffic" }
  }
}

# EKS Worker Node Security Group Rules
module "eks_node_security_group_rules" {
  source = "./modules/sg/rules"
  security_group_id = module.eks.sg_eks_node.id
  ingress = {
    nodeport_alb = { from = 30000, to = 32767, src_sg = module.alb.sg.id, desc = "Allow Access to Node Port from ALB" }
    nodeport_operator = { from = 30000, to = 32767, src_sg = module.ec2_operator.sg.id, desc = "Allow Access to Node Port from Operator" }
    ssh_operator = { from = 22, to = 22, src_sg = module.ec2_operator.sg.id, desc = "Allow SSH Protocol from Operator" }
  }
  egress = {
    all = { from = 0, to = 0, cidrs = ["0.0.0.0/0"], protocol = "-1", desc = "Allow All Outbound Traffic" }
  }
}

# ALB
module "alb_security_group_rules" {
  source = "./modules/sg/rules"
  security_group_id = module.alb.sg.id
  ingress = {
    http_user  = { from = 80, to = 80, cidrs = ["0.0.0.0/0"], desc = "Allow HTTP Protocol from All Users" }
    https_user  = { from = 443, to = 443, cidrs = ["0.0.0.0/0"], desc = "Allow HTTPS Protocol from All Users" }
  }
  egress = {
    all = { from = 0, to = 0, cidrs = ["0.0.0.0/0"], protocol = "-1", desc = "Allow All Outbound Traffic" }
  }
}

# RDS
module "rds_mysql_security_group_rules" {
  source = "./modules/sg/rules"
  security_group_id = module.rds_mysql.sg.id
  ingress = {
    mysql_vpc = { from = 3306, to = 3306, cidrs = [var.vpc.cidr_block], desc = "Allow MySQL Port Traffic ffrom VPC CIDR Blocks" }
  }
  egress = {
    all = { from = 0, to = 0, cidrs = ["0.0.0.0/0"], protocol = "-1", desc = "Allow All Outbound Traffic" }
  }
}

#################################
# SSM
#################################
module "ssm" {
  source = "./modules/ssm"
  name = var.ssm.name
}

#################################
# ECR
#################################
module "ecr_lambda_rds_mysql_initializer" {
  source = "./modules/ecr"
  repository_name = var.lambda.lambda_rds_mysql_initializer.repository_name
}


#################################
# Lambda
#################################
module "lambda_rds_mysql_initializer" {
  source = "./modules/lambda"
  name = var.lambda.lambda_rds_mysql_initializer.name
  repository_url = module.ecr_lambda_rds_mysql_initializer.repository_url
  image_tag = var.lambda.lambda_rds_mysql_initializer.image_tag
  memory_size = var.lambda.lambda_rds_mysql_initializer.memory_size
  timeout = var.lambda.lambda_rds_mysql_initializer.timeout
  tag = var.tag
}
