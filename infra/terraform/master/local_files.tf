#################################
# Local File (kubeconfig)
#################################
resource "local_file" "kubeconfig" {
  filename = "k8s/.kube/config"
  content  = <<KUBECONFIG
apiVersion: v1
clusters:
%{for key in var.eks_configs.create_status_key~}
- cluster:
    server: ${module.eks.endpoint[key]}
    certificate-authority-data: ${module.eks.certificate_authority_data[key]}
  name: eks-${key}
%{endfor~}
contexts:
%{for key in var.eks_configs.create_status_key~}
- context:
    cluster: eks-${key}
    user: eks-${key}
  name: eks-${key}
%{endfor~}
current-context: eks-blue
kind: Config
preferences: {}
users:
%{for key in var.eks_configs.create_status_key~}
- name: eks-${key}
  user:
    exec:
      apiVersion: client.authentication.k8s.io/v1alpha1
      command: aws
      args:
        - "eks"
        - "get-token"
        - "--cluster-name"
        - "${module.eks.cluster_name[key]}"
%{endfor~}
KUBECONFIG
}
