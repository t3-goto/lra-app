#################################
# Locals (aws-auth)
#################################
locals {
  config_map_aws_auth = <<CONFIGMAPAWSAUTH
- rolearn: ${aws_iam_role.eks_node.arn}
  username: system:node:{{EC2PrivateDNSName}}
  groups:
  - system:bootstrappers
  - system:nodes
CONFIGMAPAWSAUTH
}

#################################
# aws-auth
#################################
output "config_map_aws_auth" {
  value = local.config_map_aws_auth
}

#################################
# Auto Scaling Group
#################################
output "autoscaling_group_name" {
  value = { for k, v in aws_autoscaling_group.eks : k => v.name if contains(var.configs.online_status_key, k) }
}

#################################
# EKS Endpoint
#################################
output "endpoint" {
  value = { for k, v in aws_eks_cluster.eks : k => v.endpoint }
}

#################################
# EKS Cert data
#################################
output "certificate_authority_data" {
  value = { for k, v in aws_eks_cluster.eks : k => v.certificate_authority.0.data }
}

#################################
# Cluster name
#################################
output "cluster_name" {
  value = { for k, v in aws_eks_cluster.eks : k => v.name }
}

#################################
# Security Group
#################################
output "sg_control_plane" {
  value = {
    id = aws_security_group.eks_security_group.id
  }
}
output "sg_eks_node" {
  value = {
    id = aws_security_group.eks_node_security_group.id
  }
}
