#################################
# Auto Scaling Group
#################################
output "autoscaling_group_name" {
  value = aws_autoscaling_group.eks.name
}

#################################
# EKS Endpoint
#################################
output "endpoint" {
  value = aws_eks_cluster.eks.endpoint
}

#################################
# EKS Cert data
#################################
output "certificate_authority_data" {
  value = aws_eks_cluster.eks.certificate_authority.0.data
}

#################################
# EKS Node IAM Role
#################################
output "node_iam_role" {
  value = aws_iam_role.eks_node.arn
}

#################################
# Cluster name
#################################
output "cluster_name" {
  value = aws_eks_cluster.eks.name
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
