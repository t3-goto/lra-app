#################################
# Variables
#################################
variable name {
  type = string
}
variable stage {
  type = string
}
variable vpc {
  type = map(string)
}
variable eks_cluster_names {
  type = list(string)
  default = []
}
variable subnet_cidr_block {
  type = map(list(map(string)))
}
variable availability_zone {
  type = map(string)
}
variable tag {
  type = map(string)
}
