#################################
# Variables
#################################
variable vpc_id { type = string }
variable stage { type = string }
variable stage_name { type = string }
variable env { type = string }
variable owners { type = string }
variable secretsmanager_name { type = string }
variable name { type = string }
variable private_ips { type = map(string) }
variable associate_public_ip_address {
  type = bool
  default = false
}
variable ami { type = string }
variable instance_type {
  type = string
  default = "t3.small"
}
variable root_volume {
  type = number
  default = 8
}
variable key_name {
  type = string
  default = null
}
variable security_group_ids {
  type = list(string)
  default = []
}
variable subnets { type = list(any) }
variable user_data {
  type = string
  default = null
}
variable size {
  type = number
  default = 1
}
variable tag_name_prefix { type = string }
variable allocate_eip {
  type = bool
  default = false
}
variable tag { type = map(string) }
