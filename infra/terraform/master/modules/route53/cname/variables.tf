#################################
# Variables
#################################
variable zone_id { type = string }
variable ttl_sec { type = number }
variable configs {
  type = map(object({
    cname_name = string
    records = list(string)
  }))
}
