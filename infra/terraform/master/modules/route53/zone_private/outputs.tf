#################################
# Route53 (Zone)
#################################
output "id" {
  value = aws_route53_zone.zone.zone_id
}
