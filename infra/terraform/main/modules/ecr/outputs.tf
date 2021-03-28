#################################
# ECR
#################################
output "arn" {
  value = data.aws_ecr_repository.ecr.arn
}

output "repository_url" {
  value = data.aws_ecr_repository.ecr.repository_url
}
