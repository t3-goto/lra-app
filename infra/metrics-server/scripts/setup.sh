#!/bin/bash

# Set variables and constatns.
NS_SYSTEM=kube-system
DEPLOY_METRICS=metrics-server
BASE_DIR=$(
  cd $(dirname $0)
  cd ..
  pwd
)

# Get and Check arguments.
MANIFESTS_DIR=${BASE_DIR}/manifests
MANIFEST_FILE=${MANIFESTS_DIR}/components.yml

if [ ! -e ${MANIFEST_FILE} ]; then
  echo "${MANIFEST_FILE} doesn't exist."
  exit 1
fi

# Apply Manifest.
kubectl apply -f ${MANIFEST_FILE}

# Wait for MetricsServer is Ready.
kubectl wait pod -n ${NS_SYSTEM} -l k8s-app=${DEPLOY_METRICS} --for=condition=Ready
