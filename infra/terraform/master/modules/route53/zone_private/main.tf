#################################
# Route53 (Zone)
#################################
resource "aws_route53_zone" "zone" {
  name = var.zone_name
  vpc {
    vpc_id = var.vpc_id
    vpc_region = "ap-northeast-1"
  }
  force_destroy = true
  tags = {
    Project = var.tag.project_value
    Purpose = var.tag.purpose_value
    Env = var.tag.env_value
  }
}
