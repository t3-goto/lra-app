#################################
# Security Group
#################################
output "sg" {
  value = {
    id = aws_security_group.alb_security_group.id
  }
}

#################################
# DNS Entry
#################################
output "dns_entry" {
  value = {
    dns_name = aws_lb.alb.dns_name
    zone_id = aws_lb.alb.zone_id
  }
}
