#################################
# Route53 (Alias A Record)
#################################
output "fqdn" {
  value = zipmap(keys(aws_route53_record.alias), values(aws_route53_record.alias)[*].fqdn)
}
