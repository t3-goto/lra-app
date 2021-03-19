#################################
# Locals
#################################
locals {
  kubeconfig = <<KUBECONFIG
apiVersion: v1
clusters:
- cluster:
    server: ${module.eks.endpoint}
    certificate-authority-data: ${module.eks.certificate_authority_data}
  name: eks
contexts:
- context:
    cluster: eks
    user: eks
  name: eks
current-context: eks
kind: Config
preferences: {}
users:
- name: eks
  user:
    exec:
      apiVersion: client.authentication.k8s.io/v1alpha1
      command: aws
      args:
        - "eks"
        - "get-token"
        - "--cluster-name"
        - "${module.eks.cluster_name}"
  KUBECONFIG

  config_map = <<CONFIGMAP
apiVersion: v1
kind: ConfigMap
metadata:
  name: aws-auth
  namespace: kube-system
data:
  mapRoles: |
    - rolearn: ${module.eks.node_iam_role}
      username: system:node:{{EC2PrivateDNSName}}
      groups:
      - system:bootstrappers
      - system:nodes
  CONFIGMAP

}

#################################
# Outputs
#################################
output "kubeconfig" {
  value = local.kubeconfig
}

output "config_map" {
  value = local.config_map
}

#################################
# Local Files
#################################
resource "local_file" "kubeconfig" {
  filename = "local_files/.kube/config"
  content  = local.kubeconfig
}

resource "local_file" "config_map" {
  filename = "local_files/.kube/config_map.yml"
  content  = local.config_map
}
