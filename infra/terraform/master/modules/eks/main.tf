#################################
# Locals
#################################
locals {
  cluster_configs = { for k, v in var.configs.clusters : k => v if contains(var.configs.create_status_key, k) }
  node_configs = { for k, v in var.configs.nodes : k => v if contains(var.configs.create_status_key, k) }
  cluster_names = { for k in var.configs.create_status_key : k => "${var.cluster_name_prefix}-${k}" }
}

#################################
# VPC
#################################
data "aws_vpc" "vpc" {
  id = var.vpc_id
}

#################################
# IAM Role (EKS Control Plane)
#################################
resource "aws_iam_role" "eks" {
  name = "${var.cluster_name_prefix}_eks"
  assume_role_policy = <<-POLICY
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Principal": {
            "Service": "eks.amazonaws.com"
          },
          "Action": "sts:AssumeRole"
        }
      ]
    }
  POLICY
}

resource "aws_iam_role_policy_attachment" "eks" {
  for_each = toset([
    "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",
    "arn:aws:iam::aws:policy/AmazonEKSServicePolicy"
  ])

  policy_arn = each.key
  role = aws_iam_role.eks.name
}

#################################
# Security Group (EKS Control Plane)
#################################
resource "aws_security_group" "eks_security_group" {
  name_prefix = "eks-sg"
  description = "Security Group for EKS"
  vpc_id = data.aws_vpc.vpc.id
}

resource "aws_security_group_rule" "eks_security_group_ingress_node_https" {
  description = "Allow Pods to Communicate with the Cluster API Server"
  from_port = 443
  to_port = 443
  protocol = "tcp"
  source_security_group_id = aws_security_group.eks_node_security_group.id
  security_group_id = aws_security_group.eks_security_group.id
  type = "ingress"
}

#################################
# EKS Cluster
#################################
resource "aws_eks_cluster" "eks" {
  for_each = local.cluster_configs

  name = local.cluster_names[each.key]
  version = each.value.version
  role_arn = aws_iam_role.eks.arn

  vpc_config {
    security_group_ids = [aws_security_group.eks_security_group.id]
    subnet_ids = var.public_subnets[*].id
    endpoint_public_access = true
  }

  enabled_cluster_log_types = [
    "api",
    "audit",
    "authenticator",
    "controllerManager",
    "scheduler"
  ]

  tags = {
    Project = var.tag.project_value
    Purpose = "${var.tag.purpose_value}-subnet"
    Env = var.tag.env_value
    Subset = each.key
  }

  depends_on = [
    aws_iam_role_policy_attachment.eks
  ]
}

#################################
# IAM Role (EKS Worker Node)
#################################
resource "aws_iam_role" "eks_node" {
  name = "${var.cluster_name_prefix}_eks_node"

  assume_role_policy = <<-POLICY
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Action": "sts:AssumeRole",
          "Principal": {
            "Service": "ec2.amazonaws.com"
          },
          "Effect": "Allow"
        }
      ]
    }
  POLICY
}

resource "aws_iam_role_policy_attachment" "eks_node" {
  for_each = toset([
    "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
    "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy",
    "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly",
    "arn:aws:iam::aws:policy/CloudWatchAgentServerPolicy",
    "arn:aws:iam::aws:policy/service-role/AmazonEC2RoleforSSM"
  ])

  policy_arn = each.key
  role = aws_iam_role.eks_node.name
}

resource "aws_iam_instance_profile" "eks_node" {
  role = aws_iam_role.eks_node.name
}

#################################
# Security Group (EKS Worker Node)
#################################
resource "aws_security_group" "eks_node_security_group" {
  name_prefix = "eks-node-sg"
  description = "Security Group for EKS Node"
  vpc_id = data.aws_vpc.vpc.id
  tags = { for k, v in local.cluster_names : "kubernetes.io/cluster/${v}" => "owned" }
}

resource "aws_security_group_rule" "eks_node_security_group_ingress_self" {
  description = "Allow Node to Communicate with the Each Other"
  from_port = 0
  to_port = 0
  protocol = "-1"
  self = true
  security_group_id = aws_security_group.eks_node_security_group.id
  type = "ingress"
}

resource "aws_security_group_rule" "eks_node_security_group_ingress_master_tcp" {
  description = "Allow Worker Kubelets and Pods to Receive TCP Communication from the Cluster Control Plane"
  from_port = 1025
  to_port = 65535
  protocol = "tcp"
  source_security_group_id = aws_security_group.eks_security_group.id
  security_group_id = aws_security_group.eks_node_security_group.id
  type = "ingress"
}

resource "aws_security_group_rule" "eks_node_security_group_ingress_master_udp" {
  description = "Allow Worker Kubelets and Pods to Receive UDP Communication from the Cluster Control Plane"
  from_port = 1025
  to_port = 65535
  protocol = "udp"
  source_security_group_id = aws_security_group.eks_security_group.id
  security_group_id = aws_security_group.eks_node_security_group.id
  type = "ingress"
}

resource "aws_security_group_rule" "eks_node_security_group_ingress_master_https" {
  description = "Allow Worker Kubelets and Pods to Receive HTTPS Communication from the Cluster Control Plane"
  from_port = 443
  to_port = 443
  protocol = "tcp"
  source_security_group_id = aws_security_group.eks_security_group.id
  security_group_id = aws_security_group.eks_node_security_group.id
  type = "ingress"
}

#################################
# EKS Node
#################################
data "aws_ami" "eks_node" {
  for_each = local.node_configs

  filter {
    name = "name"
    values = [each.value.ami]
  }

  most_recent = true
  owners= [var.owners]
}


#################################
# Auto Scaling Launch Configuration
#################################
resource "aws_launch_configuration" "eks" {
  for_each = local.node_configs

  name_prefix = "eks_node"
  associate_public_ip_address = true # If nodes be deployed on public subnets, must be true.
  iam_instance_profile = aws_iam_instance_profile.eks_node.name
  image_id = data.aws_ami.eks_node[each.key].id
  instance_type = each.value.instance_type
  key_name = var.key_name
  security_groups = [aws_security_group.eks_node_security_group.id]
  user_data_base64 = base64encode(<<-USERDATA
    #!/bin/bash
    set -o xtrace
    /etc/eks/bootstrap.sh --apiserver-endpoint '${aws_eks_cluster.eks[each.key].endpoint}' --b64-cluster-ca '${aws_eks_cluster.eks[each.key].certificate_authority[0].data}' '${local.cluster_names[each.key]}'
  USERDATA
  )

  root_block_device {
    volume_size = each.value.storage
  }

  lifecycle {
    create_before_destroy = true
  }
}

#################################
# Auto Scaling Group
#################################
resource "aws_autoscaling_group" "eks" {
  for_each = local.node_configs

  name_prefix = "eks_node"
  desired_capacity = each.value.size.desired
  launch_configuration = aws_launch_configuration.eks[each.key].id
  max_size = each.value.size.max
  min_size = each.value.size.min
  vpc_zone_identifier = var.public_subnets[*].id
  health_check_type = "ELB"
  force_delete = true

  lifecycle {
    ignore_changes = [load_balancers, target_group_arns]
  }

  tag {
    key = "kubernetes.io/cluster/${local.cluster_names[each.key]}"
    value = "owned"
    propagate_at_launch = true
  }
  tag {
    key = "Name"
    value = "${var.datanode_name_key}-${var.stage_name}-asgroup-${var.env}-${each.key}"
    propagate_at_launch = true
  }
  tag {
    key = "Project"
    value = var.tag.project_value
    propagate_at_launch = true
  }
  tag {
    key = "Purpose"
    value = var.tag.purpose_value
    propagate_at_launch = true
  }
  tag {
    key = "Env"
    value = var.tag.env_value
    propagate_at_launch = true
  }
  tag {
    key = "Subset"
    value = each.key
    propagate_at_launch = true
  }
  tag {
    key = "auth_ope"
    value = var.datanode_name_key
    propagate_at_launch = true
  }
}

#################################
# IAM OpenID Connect Provider
#################################
resource "aws_iam_openid_connect_provider" "eks" {
  for_each = local.cluster_configs
  client_id_list = ["sts.amazonaws.com"]
  thumbprint_list = ["9e99a48a9960b14926bb7f3b02e22da2b0ab7280"]
  url = aws_eks_cluster.eks[each.key].identity[0].oidc[0].issuer
}
