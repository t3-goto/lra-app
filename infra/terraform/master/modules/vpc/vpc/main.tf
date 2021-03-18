#################################
# Locals
#################################
locals {
  names = {
    vpc = "${var.name}_${var.env}"
  }
}

#################################
# VPC
#################################
resource "aws_vpc" "vpc" {
  cidr_block = var.vpc.cidr_block
  enable_dns_hostnames = true

  tags = merge(
    { Name = local.names.vpc },
    { for name in var.eks_cluster_names : "kubernetes.io/cluster/${name}" => "shared" },
    { Project = var.tag.project_value },
    { Purpose = var.tag.purpose_value },
    { Env = var.tag.env_value },
  )
}

#################################
# Subnet
#################################
resource "aws_subnet" "public" {
  count = length(var.subnet_cidr_block.public)

  vpc_id = aws_vpc.vpc.id
  cidr_block = var.subnet_cidr_block.public[count.index].cidr
  availability_zone_id = var.availability_zone[var.subnet_cidr_block.public[count.index].az]

  tags = merge({
    "Name" = "${local.names.vpc}_public_${var.subnet_cidr_block.public[count.index].az}"
    "kubernetes.io/role/internal-elb" = 1
    "kubernetes.io/role/elb" = 1
    },
    { for name in var.eks_cluster_names : "kubernetes.io/cluster/${name}" => "shared" },
    { Project = var.tag.project_value },
    { Purpose = var.tag.purpose_value },
    { Env = var.tag.env_value }
  )
}

resource "aws_subnet" "private" {
  count = length(var.subnet_cidr_block.private)

  vpc_id = aws_vpc.vpc.id
  cidr_block = var.subnet_cidr_block.private[count.index].cidr
  availability_zone_id = var.availability_zone[var.subnet_cidr_block.private[count.index].az]

  tags = {
    Name = "${local.names.vpc}_private_${var.subnet_cidr_block.private[count.index].az}"
    Project = var.tag.project_value
    Purpose = var.tag.purpose_value
    Env = var.tag.env_value
  }
}

#################################
# Internet Gateway
#################################
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.vpc.id

  tags = {
    Name = "${local.names.vpc}_igw"
    Project = var.tag.project_value
    Purpose = var.tag.purpose_value
    Env = var.tag.env_value
  }
}


#################################
# Route Table
#################################
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.vpc.id

  tags = {
    Name = "public"
    Project = var.tag.project_value
    Purpose = var.tag.purpose_value
    Env = var.tag.env_value
  }
  depends_on = [aws_internet_gateway.igw]
}

resource "aws_route_table" "private" {
  vpc_id = aws_vpc.vpc.id

  tags = {
    Name = "private"
    Project = var.tag.project_value
    Purpose = var.tag.purpose_value
    Env = var.tag.env_value
  }
}

#################################
# Route Table Association
#################################
resource "aws_route_table_association" "public" {
  count = length(var.subnet_cidr_block.public)

  subnet_id = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "private" {
  count = length(var.subnet_cidr_block.private)

  subnet_id = aws_subnet.private[count.index].id
  route_table_id = aws_route_table.private.id
}

#################################
# Route
#################################
resource "aws_route" "igw_public" {
  route_table_id = aws_route_table.public.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id = aws_internet_gateway.igw.id
}
