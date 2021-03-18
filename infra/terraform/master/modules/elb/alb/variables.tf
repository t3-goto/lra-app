#################################
# Variables
#################################
variable stage { type = string }
variable env { type = string }
variable owners { type = string }
variable ssl_cert {}
variable vpc_id { type = string }
variable public_subnets {}
variable autoscaling_group_name { type = map(string) }
variable idle_timeout {}
variable tag {}
