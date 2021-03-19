#################################
# Variables
#################################
variable vpc_id {
  type = string
}
variable stage {
  type = string
}
variable private_subnets {
  type = list(any)
}
variable name {
  type = string
}
variable username {
  type = string
}
variable password {
  type = string
}
variable instance_class {
  type = string
}
variable backup_window {
  type = string
}
variable maintenance_window {
  type = string
}
variable tag {
  type = map(string)
}
