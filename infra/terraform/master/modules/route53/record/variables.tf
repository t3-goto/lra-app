variable zone_id { type = string }
variable ttl_sec { type = number }
variable configs {
  type = map(object({
    record_name = string
    records = list(string)
  }))
}
