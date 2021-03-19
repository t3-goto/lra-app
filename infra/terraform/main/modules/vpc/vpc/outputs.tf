#################################
# VPC
#################################
output "vpc_id" {
  value = aws_vpc.vpc.id
}

#################################
# Subnet
#################################
output "public_subnets" {
  value = aws_subnet.public
}

output "private_subnets" {
  value = aws_subnet.private
}

#################################
# Route Table
#################################
output "public_route_table" {
  value = aws_route_table.public
}

output "private_route_table" {
  value = aws_route_table.private
}
