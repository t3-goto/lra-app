#################################
# Security Group
#################################
output "sg" {
  value = {
    id = aws_security_group.vpc_endpoint_security_group.id
  }
}
