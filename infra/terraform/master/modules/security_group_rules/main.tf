#################################
# Security Group Rule (Ingress)
#################################
resource "aws_security_group_rule" "ingress" {
  for_each = var.ingress

  security_group_id = var.security_group_id
  type = "ingress"
  description = lookup(each.value, "desc", null)
  protocol = lookup(each.value, "protocol", "tcp")
  from_port = each.value.from
  to_port = each.value.to
  cidr_blocks = lookup(each.value, "cidrs", null)
  source_security_group_id = lookup(each.value, "src_sg", null)
}

#################################
# Security Group Rule (Egress)
#################################
resource "aws_security_group_rule" "egress" {
  for_each = var.egress

  security_group_id = var.security_group_id
  type = "egress"
  description = lookup(each.value, "desc", null)
  protocol = lookup(each.value, "protocol", "tcp")
  from_port = each.value.from
  to_port = each.value.to
  cidr_blocks = lookup(each.value, "cidrs", null)
  source_security_group_id = lookup(each.value, "src_sg", null)
}
