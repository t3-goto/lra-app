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
    Name = var.zone_name
    Project = var.tag.project
    Purpose = var.tag.purpose
  }
}
