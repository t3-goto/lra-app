#################################
# Variables
#################################
variable vpc_id {
  type = string
}
variable stage {
  type = string
}
variable aws_account_id {
  type = string
}
variable ssl_cert {
  type = map(object({
    id = string
    policy = string
    sni = map(string)
  }))
}
variable public_subnets {
  type = list(any)
}
variable autoscaling_group_name {
  type = string
}
variable idle_timeout {
  type = number
}
variable tag {
  type = map(string)
}
