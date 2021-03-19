#################################
# Security Group
#################################
output "sg" {
  value = {
    id = aws_security_group.ec2_security_group.id
  }
}

#################################
# DNS Entry
#################################
output "dns_entry" {
  value = {
    private = zipmap(keys(aws_instance.ec2), values(aws_instance.ec2)[*].private_dns)
    public = length(aws_eip.ec2) > 0 ? zipmap(keys(aws_eip.ec2), values(aws_eip.ec2)[*].public_dns) : null
  }
}
