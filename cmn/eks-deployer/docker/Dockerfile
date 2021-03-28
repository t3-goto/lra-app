FROM amazon/aws-cli:2.1.22

ARG KUBECTL_VERSION=1.19.3
ARG KUSTOMIZE_VERSION=3.9.2

# add aws-cli
RUN yum update -y \
  && yum install -y wget tar gzip

# add kubectl
RUN wget https://storage.googleapis.com/kubernetes-release/release/v${KUBECTL_VERSION}/bin/linux/amd64/kubectl ; \
  mv kubectl /usr/local/bin/kubectl; chmod +x /usr/local/bin/kubectl

# add kustomize
RUN  wget https://github.com/kubernetes-sigs/kustomize/releases/download/kustomize%2Fv${KUSTOMIZE_VERSION}/kustomize_v${KUSTOMIZE_VERSION}_linux_amd64.tar.gz; \
  tar xvzf kustomize_v${KUSTOMIZE_VERSION}_linux_amd64.tar.gz; \
  mv kustomize /usr/local/bin; \
  chmod +x /usr/local/bin/kustomize

ENTRYPOINT [""]
