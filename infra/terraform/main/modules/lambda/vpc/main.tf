#################################
# VPC
#################################
data "aws_vpc" "vpc" {
  id = var.vpc_id
}

#################################
# Security Group
#################################
resource "aws_security_group" "lambda_security_group" {
  name_prefix = "lambda-sg-${var.stage}-${var.name}"
  description = "Security Group for Lambda: ${var.stage}-${var.name}"
  vpc_id = data.aws_vpc.vpc.id

  tags = {
    Name = "${var.name}-lambda"
    Project = var.tag.project
    Purpose = var.tag.purpose
  }
}

#################################
# IAM Role
#################################
resource "aws_iam_role" "lambda" {
  name = "${var.name}-iam_role"
  assume_role_policy = <<-EOF
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": "sts:AssumeRole",
        "Principal": {
          "Service": "lambda.amazonaws.com"
        },
        "Effect": "Allow"
      }
    ]
  }
  EOF
}

resource "aws_iam_role_policy" "lambda_vpc_attach" {
  name_prefix = "${var.name}-iam_lambda_vpc_attach_policy"
  role = aws_iam_role.lambda.id
  policy = <<-EOF
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
          "ec2:CreateNetworkInterface",
          "ec2:DescribeNetworkInterfaces",
          "ec2:DeleteNetworkInterface"
        ],
        "Effect": "Allow",
        "Resource": "*"
      }
    ]
  }
  EOF
}

#################################
# Lambda
#################################
resource "aws_lambda_function" "lambda" {
  function_name = var.name
  role= aws_iam_role.lambda.arn
  package_type= "Image"
  image_uri = "${var.repository_url}:${var.image_tag}"
  memory_size = var.memory_size
  timeout = var.timeout

  lifecycle {
    ignore_changes = [image_uri]
  }
  vpc_config {
    subnet_ids = var.subnets[*].id
    security_group_ids = [aws_security_group.lambda_security_group.id]
  }
  tags = {
    Name = var.name
    Project = var.tag.project
    Purpose = var.tag.purpose
  }
}
