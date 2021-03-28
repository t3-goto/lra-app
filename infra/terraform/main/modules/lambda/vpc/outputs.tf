#################################
# Security Group
#################################
output "sg" {
  value = {
    id = aws_security_group.lambda_security_group.id
  }
}
