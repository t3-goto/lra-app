#!/bin/bash

# Set Variables.
EXEC_ENV=prod #TODO:Change from a fixed value to a variable value
TERRAFORM_DIR=$(
  cd $(dirname $0)
  cd ..
  pwd
)
K8S_SCRIPTS_DIR=${TERRAFORM_DIR}/k8s/scripts
K8S_INIT_SCRIPT=${K8S_SCRIPTS_DIR}/init.sh
K8S_APPLY_SCRIPT=${K8S_SCRIPTS_DIR}/apply.sh

# Kubernetes init & apply ConfigMap for aws-auth.
eval $(echo ${K8S_INIT_SCRIPT}) && eval $(echo ${K8S_APPLY_SCRIPT})
