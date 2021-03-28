#################################
# Variables
#################################
variable name {
  type = string
}
variable repository_url {
  type = string
}
variable image_tag {
  type = string
}
variable memory_size {
  type = number
}
variable timeout {
  type = number
}
variable vpc_id {
  type = string
}
variable subnets {
  type = list(any)
}
variable stage {
  type = string
}
variable tag {
  type = map(string)
}
