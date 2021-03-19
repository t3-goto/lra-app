#################################
# Security Group
#################################
resource "aws_security_group" "vpc_endpoint_security_group" {
  description = substr("SG for endpoints of ${join(",", values(var.service_names))}", 0, 255)
  vpc_id = var.vpc_id

  tags = {
    Name = "${var.endpoint_name}-endpoint"
    Project = var.tag.project
    Purpose = var.tag.purpose
  }
}

#################################
# VPC Endpoint
#################################
resource "aws_vpc_endpoint" "vpc_endpoint" {
  for_each = var.service_names

  service_name = each.value
  vpc_id = var.vpc_id
  vpc_endpoint_type = var.endpoint_type
  subnet_ids = var.subnets[*].id
  private_dns_enabled = var.private_dns_enabled

  security_group_ids = [
    aws_security_group.vpc_endpoint_security_group.id
  ]

  tags = {
    Name = "${each.key}-endpoint"
    Project = var.tag.project
    Purpose = var.tag.purpose
  }
}
