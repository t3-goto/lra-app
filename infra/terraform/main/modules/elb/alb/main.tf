#################################
# VPC
#################################
data "aws_vpc" "vpc" {
  id = var.vpc_id
}

#################################
# Security Group
#################################
resource "aws_security_group" "alb_security_group" {
  name_prefix = "alb-sg"
  description = "Security Group for ALB"
  vpc_id = data.aws_vpc.vpc.id
}

#################################
# ALB
#################################
resource "aws_lb" "alb" {
  name = "alb"
  internal = false
  load_balancer_type = "application"
  security_groups = [aws_security_group.alb_security_group.id]
  subnets = var.public_subnets[*].id
  enable_deletion_protection = false
  idle_timeout = var.idle_timeout
  tags = {
    Name = "alb"
    Project = var.tag.project
    Purpose = var.tag.purpose
  }
}

#################################
# ALB Listener for HTTP
#################################
resource "aws_lb_listener" "alb_http" {
  load_balancer_arn = aws_lb.alb.arn
  port = "80"
  protocol = "HTTP"

  default_action {
    type = "forward"
    target_group_arn = aws_lb_target_group.alb.arn
  }
}

#################################
# ALB Listener for HTTPS
#################################
resource "aws_lb_listener" "alb_https" {
  load_balancer_arn = aws_lb.alb.arn
  port = "443"
  protocol = "HTTPS"
  ssl_policy = var.ssl_cert.alb.policy
  certificate_arn = "arn:aws:acm:ap-northeast-1:${var.aws_account_id}:certificate/${var.ssl_cert.alb.id}"

  default_action {
    type = "forward"
    target_group_arn = aws_lb_target_group.alb.arn
  }
}

#################################
# ALB Target Group
#################################
resource "aws_lb_target_group" "alb" {
  name = "alb"
  port = 30080
  protocol = "HTTP"
  vpc_id = data.aws_vpc.vpc.id

  health_check {
    # path = "/healthz/ready" # TODO:implement health port
    # port = 30020 # TODO:implement health port
    path = "/"
    port = 30080
    matcher = 200
    interval = 5
    timeout = 3
    healthy_threshold = 3
    unhealthy_threshold = 3
  }
  tags = {
    Name = "alb"
    Project = var.tag.project
    Purpose = var.tag.purpose
  }
}

#################################
# Auto Scaling Attachment
#################################
resource "aws_autoscaling_attachment" "alb" {
  autoscaling_group_name = var.autoscaling_group_name
  alb_target_group_arn = aws_lb_target_group.alb.arn
}
