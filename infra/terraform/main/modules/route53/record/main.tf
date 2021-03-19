#################################
# Route53 (Zone)
#################################
data "aws_route53_zone" "zone" {
  zone_id = var.zone_id
}

#################################
# Route53 (A Record)
#################################
resource "aws_route53_record" "record" {
  for_each = var.configs
  zone_id = data.aws_route53_zone.zone.zone_id
  name = "${each.value.record_name}.${data.aws_route53_zone.zone.name}"
  type = "A"
  ttl = var.ttl_sec
  records = each.value.records
}
