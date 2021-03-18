#################################
# Providers
#################################
provider "kubernetes" {
  alias = "eks-blue"
  config_path = "./.kube/config"
  config_context = "eks-blue"
}

provider "kubernetes" {
  alias = "eks-green"
  config_path = "./.kube/config"
  config_context = "eks-green"
}
