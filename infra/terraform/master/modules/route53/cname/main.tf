#################################
# Route53 (Zone)
#################################
data "aws_route53_zone" "zone" {
  zone_id = var.zone_id
}

#################################
# Route53 (CNAME Record)
#################################
resource "aws_route53_record" "cname" {
  for_each = var.configs
  zone_id = data.aws_route53_zone.zone.zone_id
  name = "${each.value.cname_name}.${data.aws_route53_zone.zone.name}"
  type = "CNAME"
  ttl = var.ttl_sec
  records = each.value.records
}
