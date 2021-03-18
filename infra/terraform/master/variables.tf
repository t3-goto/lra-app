#################################
# Base
#################################
variable stage { type = string }
variable stage_name { type = string }
variable env { type = string }
variable tag { type = map(string) }
variable ec2_key_name { type = string }
variable secretsmanager_name { type = string }
variable aws_account_id { type = string }
variable eks_node_owners_id { type = string }

#################################
# SSL
#################################
variable ssl_cert { type = map(object({ id = string, policy = string, sni = map(string) }) ) }

#################################
# VPC
#################################
variable vpc { type = map(string) }
variable subnet_cidr_block { type = map(list(map(string))) }
variable availability_zone { type = map(string) }

#################################
# EKS
#################################
variable eks_configs { type = object({ create_status_key = list(string), online_status_key = list(string), clusters = map(map(string)), nodes = map(object({ instance_type = string, ami = string, storage = number, size = map(number) })) }) }

#################################
# Route53
#################################
variable dns_name { type = map(string) }

#################################
# EC2
#################################
variable ec2 { type = map(object({ name = string, tag_name_prefix = string, instance_type = string, ami = string, root_volume = string, s3 = map(string), private_ips = map(string) })) }

#################################
# RDS
#################################
variable rds_mysql { type = object({ name = string, username = string, password = string, instance_class = string, backup_window = string, maintenance_window = string }) }
