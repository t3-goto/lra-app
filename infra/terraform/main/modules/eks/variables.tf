#################################
# Variables
#################################
variable vpc_id {
  type = string
}
variable stage {
  type = string
}
variable tag {
  type = map(string)
}
variable owners {
  type = string
}
variable public_subnets {
  type = list(any)
}
variable key_name {
  type = string
  default = null
}
variable config {
  type = object({
    cluster = object({
      name = string
      version = string
    })
    node = object({
      name = string
      instance_type = string
      ami = string
      storage = number
      size = map(number)
    })
  })
}
variable aws_account_id {
  type = string
}
