#################################
# Versions
#################################
terraform {
  required_version = "0.13.4"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.22.0"
    }
    local = {
      source  = "hashicorp/local"
      version = "1.4.0"
    }
    archive = {
      source  = "hashicorp/archive"
      version = "1.3.0"
    }
  }
}
