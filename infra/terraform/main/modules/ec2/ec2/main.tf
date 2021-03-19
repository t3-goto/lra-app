#################################
# VPC
#################################
data "aws_vpc" "vpc" {
  id = var.vpc_id
}

#################################
# Security Group
#################################
resource "aws_security_group" "ec2_security_group" {
  name_prefix = "ec2-sg-${var.stage}-${var.name}"
  description = "Security Group for EC2: ${var.stage}-${var.name}"
  vpc_id = data.aws_vpc.vpc.id

  tags = {
    Name = "${var.name}-ec2"
    Project = var.tag.project
    Purpose = var.tag.purpose
  }
}

#################################
# IAM Role
#################################
resource "aws_iam_role" "ec2_role" {
  name_prefix = "ec2-role-${var.stage}-${var.name}"
  assume_role_policy = <<-POLICY
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "",
          "Effect": "Allow",
          "Principal": {
            "Service": "ec2.amazonaws.com"
          },
          "Action": "sts:AssumeRole"
        }
      ]
    }
  POLICY
}

#################################
# IAM Policy (GetSecretValue)
#################################
resource "aws_iam_role_policy" "secretsmanager" {
  name_prefix = "ec2-policy-${var.stage}-${var.name}-sm"
  role = aws_iam_role.ec2_role.id
  policy = <<-POLICY
    {
      "Version": "2012-10-17",
      "Statement": {
        "Effect": "Allow",
        "Action": "secretsmanager:GetSecretValue",
        "Resource": "arn:aws:secretsmanager:ap-northeast-1:${var.aws_account_id}:secret:${var.secretsmanager_name}"
      }
    }
  POLICY
}

#################################
# Instance Profile
#################################
resource "aws_iam_instance_profile" "ec2_profile" {
  name_prefix = "ec2-profile-${var.stage}-${var.name}"
  role = aws_iam_role.ec2_role.id
}

#################################
# EC2
#################################
resource "aws_instance" "ec2" {
  for_each = var.private_ips
  associate_public_ip_address = var.associate_public_ip_address
  ami = var.ami
  instance_type = var.instance_type
  key_name = var.key_name
  vpc_security_group_ids = concat(var.security_group_ids, [aws_security_group.ec2_security_group.id])
  subnet_id = element(var.subnets, tonumber(each.key) - 1).id
  private_ip = each.value
  user_data_base64 = var.user_data != null ? base64encode(var.user_data) : null
  iam_instance_profile = aws_iam_instance_profile.ec2_profile.id

  root_block_device {
    volume_size = var.root_volume
  }

  lifecycle {
    ignore_changes = [
      ebs_block_device,
    ]
  }

  tags = {
    Name = "${var.name}-ec2-${each.key}"
    Project = var.tag.project
    Purpose = var.tag.purpose
  }
}

#################################
# Elastic IP
#################################
resource "aws_eip" "ec2" {
  for_each = var.allocate_eip ? var.private_ips : {}
  instance = aws_instance.ec2[each.key].id
  vpc = true
}
