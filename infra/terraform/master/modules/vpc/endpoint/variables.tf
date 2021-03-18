#################################
# Variables
#################################
variable vpc_id { type = string }
variable endpoint_name { type = string }
variable stage { type = string }
variable stage_name { type = string }
variable env { type = string }
variable service_names { type = map(string) }
variable endpoint_type {
  type = string
  default = "Interface"
}
variable subnets { type = list(any) }
variable private_dns_enabled {
  type = bool
  default = true
}
