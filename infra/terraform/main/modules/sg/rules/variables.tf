#################################
# Variables
#################################
variable security_group_id {
  type = string
}
variable ingress {
  type = any
  default = {}
}
variable egress {
  type = any
  default = {}
}
