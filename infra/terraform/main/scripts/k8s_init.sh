#!/bin/bash

# Set Variables.
TERRAFORM_DIR=$(
  cd $(dirname $0)
  cd ..
  pwd
)
MANIFEST_FILE=${TERRAFORM_DIR}/local_files/.kube/config_map.yml

# Set Environment Variables.
export KUBECONFIG=${TERRAFORM_DIR}/local_files/.kube/config

# Apply ConfigMap for aws-auth
kubectl apply -f ${MANIFEST_FILE}
