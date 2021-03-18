#################################
# Variables
#################################
variable cluster_name_prefix { type = string }
variable stage { type = string }
variable stage_name { type = string }
variable env { type = string }
variable vpc_id { type = string }
variable datanode_name_key { type = string }
variable public_subnets {}
variable tag {}
variable owners {}
variable key_name {
  type    = string
  default = null
}
variable configs {
  type = object({
    create_status_key = list(string)
    online_status_key = list(string)
    clusters          = map(map(string))
    nodes = map(object({
      instance_type = string
      ami           = string
      storage       = number
      size          = map(number)
    }))
  })
}
variable aws_account_id { type = string }
