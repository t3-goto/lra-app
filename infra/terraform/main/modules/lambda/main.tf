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

  tags = {
    Name = var.name
    Project = var.tag.project
    Purpose = var.tag.purpose
  }
}
