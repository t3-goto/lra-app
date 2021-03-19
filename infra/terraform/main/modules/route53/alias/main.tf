#################################
# Route53 (Zone)
#################################
data "aws_route53_zone" "zone" {
  zone_id = var.zone_id
}

#################################
# Route53 (Alias A Record)
#################################
resource "aws_route53_record" "alias" {
  for_each = var.configs
  zone_id = data.aws_route53_zone.zone.zone_id
  name = "${each.value.alias_name}.${data.aws_route53_zone.zone.name}"
  type = "A"
  alias {
    name = each.value.original_dns_name
    zone_id = each.value.original_zone_id
    evaluate_target_health = true
  }
}
