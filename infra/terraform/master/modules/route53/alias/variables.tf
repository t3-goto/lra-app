#################################
# Variables
#################################
variable zone_id { type = string }
variable configs {
  type = map(object({
    alias_name        = string
    original_dns_name = string
    original_zone_id  = string
  }))
}
variable tag {}
