#################################
# VPC
#################################
data "aws_vpc" "vpc" {
  id = var.vpc_id
}

#################################
# Security Group
#################################
resource "aws_security_group" "rds_mysql_security_group" {
  name_prefix = "rds-mysql-sg"
  description = "Security Group for RDS MySQL"
  vpc_id = data.aws_vpc.vpc.id

  tags = {
    Name = "rds-mysql-${var.name}"
    Project = var.tag.project
    Purpose = var.tag.purpose
  }
}

#################################
# DB Subnet Group
#################################
resource "aws_db_subnet_group" "rds_mysql_subnet_group" {
  name = "rds-mysql-${var.name}"
  subnet_ids = var.private_subnets[*].id

  tags = {
    Name = "rds-mysql-${var.name}"
    Project = var.tag.project
    Purpose = var.tag.purpose
  }
}

#################################
# RDS Parameter Group
#################################
resource "aws_db_parameter_group" "rds_mysql_parameter_group" {
  name = "rds-mysql-${var.name}-parameter-group"
  family = "mysql5.7"
  description = "rds-mysql-${var.name}-parameter-group"

  parameter {
    name = "character_set_database"
    value = "utf8mb4"
  }

  parameter {
    name = "character_set_server"
    value = "utf8mb4"
  }
}

#################################
# RDS Option Group
#################################
resource "aws_db_option_group" "rds_mysql_option_group" {
  name = "rds-mysql-${var.name}-option-group"
  option_group_description = "rds-mysql-${var.name}-option-group"

  engine_name = "mysql"
  major_engine_version = "5.7"

  option {
    option_name = "MARIADB_AUDIT_PLUGIN"
  }
}

#################################
# KMS Key
#################################
resource "aws_kms_key" "kms_key" {
  description = "rds-mysql-${var.name}-master-key"
  enable_key_rotation = true
  is_enabled = true
  deletion_window_in_days = 30
}

#################################
# KMS Alias
#################################
resource "aws_kms_alias" "kms_alias" {
  name = "alias/rds-mysql-${var.name}"
  target_key_id = aws_kms_key.kms_key.key_id
}

#################################
# RDS Instance
#################################
resource "aws_db_instance" "rds_mysql_instance" {
  identifier = "rds-mysql-${var.name}"
  engine = "mysql"
  engine_version = "5.7.25"
  instance_class = var.instance_class
  allocated_storage = 20
  storage_type = "gp2"
  storage_encrypted = true
  kms_key_id = aws_kms_key.kms_key.arn
  name = var.name
  username = var.username
  password = var.password
  multi_az = false
  publicly_accessible = false
  backup_window = var.backup_window
  backup_retention_period = 30
  maintenance_window = var.maintenance_window
  auto_minor_version_upgrade = false
  deletion_protection = false
  skip_final_snapshot = true
  port = 3306
  apply_immediately = false
  vpc_security_group_ids = [aws_security_group.rds_mysql_security_group.id]
  parameter_group_name = aws_db_parameter_group.rds_mysql_parameter_group.name
  option_group_name = aws_db_option_group.rds_mysql_option_group.name
  db_subnet_group_name = aws_db_subnet_group.rds_mysql_subnet_group.name
  depends_on = [aws_db_parameter_group.rds_mysql_parameter_group, aws_db_option_group.rds_mysql_option_group,aws_kms_key.kms_key]

  lifecycle {
    ignore_changes = [password]
  }

  tags = {
    Name = "rds-mysql-${var.name}"
    Project = var.tag.project
    Purpose = var.tag.purpose
  }
}
