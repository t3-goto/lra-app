#################################
# Variables
#################################
variable name {}
variable stage { type = string }
variable env { type = string }
variable vpc { type = map(string) }
variable eks_cluster_names {
  type = list(string)
  default = []
}
variable subnet_cidr_block {}
variable availability_zone { type = map(string) }
variable tag {}
