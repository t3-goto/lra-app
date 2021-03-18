#################################
# External tfstate
#################################
data "terraform_remote_state" "aws" {
  backend = "s3"
  config = {
    bucket = "tfstates-lra"
    key = "master/terraform.tfstate"
    region = "ap-northeast-1"
  }
  workspace = terraform.workspace
}

#################################
# Kubernetes ConfigMap
#################################
module "aws_auth_eks_blue" {
  source = "./modules/aws_auth"
  providers = {
    kubernetes = kubernetes.eks-blue
  }
  subset = "blue"
  subset_keys = data.terraform_remote_state.aws.outputs.eks_subset_keys
  map_roles = data.terraform_remote_state.aws.outputs.config_map_aws_auth
}

module "aws_auth_eks_green" {
  source = "./modules/aws_auth"
  providers = {
    kubernetes = kubernetes.eks-green
  }
  subset = "green"
  subset_keys = data.terraform_remote_state.aws.outputs.eks_subset_keys
  map_roles = data.terraform_remote_state.aws.outputs.config_map_aws_auth
}
