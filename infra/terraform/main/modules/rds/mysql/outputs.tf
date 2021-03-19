#################################
# Security Group
#################################
output "sg" {
  value = {
    id = aws_security_group.rds_mysql_security_group.id
  }
}

#################################
# DNS Entry
#################################
output "dns_entry" {
  value = aws_db_instance.rds_mysql_instance.address
}

