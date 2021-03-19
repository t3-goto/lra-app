#################################
# Route53 (Zone)
#################################
output "id" {
  value = data.aws_route53_zone.zone.zone_id
}
