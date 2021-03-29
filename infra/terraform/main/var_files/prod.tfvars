#################################
# Base
#################################
stage = "prod"
tag = {
  project = "lra_pj"
  purpose = "lra_app"
}
ec2_key_name = "lra-key"
secretsmanager_name = "lra-key-HFrQis"
aws_account_id = "787350286285"
eks_node_owners_id = "602401143452"

#################################
# SSL
#################################
ssl_cert = {
  alb = {
    id = "7709f069-b841-4d33-9878-cb25cb8108e7"
    policy = "ELBSecurityPolicy-2016-08"
    sni = {
      "" = ""
    }
  }
}

#################################
# VPC
#################################
vpc = {
  cidr_block = "192.168.0.0/16"
}

subnet_cidr_block = {
  public = [
    { cidr = "192.168.0.0/24", az = "a" },
    { cidr = "192.168.1.0/24", az = "c" },
  ]
  private = [
    { cidr = "192.168.16.0/24", az = "a" },
    { cidr = "192.168.17.0/24", az = "c" },
  ]
}

availability_zone = {
  a = "apne1-az4"
  c = "apne1-az1"
  d = "apne1-az2"
}

#################################
# EKS
#################################
eks = {
  cluster = {
    name = "eks"
    version = "1.18"
  }
  node = {
    name = "eks-node"
    instance_type = "t3.medium" # t3.small's appliable pod counts is 11, so all application can't be applied.
    ami = "amazon-eks-node-1.18-v20201126"
    storage = 50
    size = {
      min = 1
      max = 1
      desired = 1
    }
  }
}

#################################
# Route53
#################################
dns_name = {
  public = "lratg.com"
  internal = "vpc.internal"
  external = "vpc.external"
}

#################################
# EC2
#################################
ec2 = {
  operator = {
    name = "operator"
    instance_type = "t3.nano"
    ami = "ami-052652af12b58691f"
    root_volume = 8
    s3 = {
      name = ""
    }
    private_ips = {
      "01" = "192.168.16.10"
    }
  }
}

#################################
# RDS
#################################
rds_mysql = {
  name = "lradb"
  username = "lradb"
  password = "lradb111"
  instance_class = "db.t3.micro"
  backup_window = "18:00-19:00"
  maintenance_window = "Mon:17:00-Mon:18:00"
}

#################################
# SSM
#################################
ssm = {
  name = "SSM-SessionManagerRunShell"
}

#################################
# Lambda
#################################
lambda = {
  lambda_rds_mysql_initializer = {
    name = "lambda-rds-mysql-initializer"
    repository_name = "lambda-rds-mysql-initializer"
    image_tag = "latest"
    memory_size = 128
    timeout = 60
  }
}
