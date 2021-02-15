FROM cimg/node:12.20

RUN sudo apt-get install -y wget; \
  curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.19.3/bin/linux/amd64/kubectl; \
  sudo mv kubectl /usr/local/bin; \
  sudo chmod +x /usr/local/bin/kubectl; \
  wget https://github.com/kubernetes-sigs/kustomize/releases/download/kustomize%2Fv3.9.2/kustomize_v3.9.2_linux_amd64.tar.gz; \
  tar xvzf kustomize_v3.9.2_linux_amd64.tar.gz; \
  sudo mv kustomize /usr/local/bin; \
  sudo chmod +x /usr/local/bin/kustomize; \
  curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"; \
  unzip awscliv2.zip; \
  sudo ./aws/install;
