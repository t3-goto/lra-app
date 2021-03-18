#################################
# Kubernetes ConfigMap
#################################
resource "kubernetes_config_map" "aws_auth" {
  count = contains(var.subset_keys, var.subset) ? 1 : 0

  metadata {
    name = "aws-auth"
    namespace = "kube-system"
  }
  data = {
    mapRoles = var.map_roles
  }
}
