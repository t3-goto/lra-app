#################################
# Outputs
#################################
output "config_map_aws_auth" {
  value = module.eks.config_map_aws_auth
}

output "eks_subset_keys" {
  value = keys(module.eks.endpoint)
}
