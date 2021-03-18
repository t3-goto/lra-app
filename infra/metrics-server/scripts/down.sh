#!/bin/bash

# Set variables.
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

# Delete Manifest.
kubectl delete -f ${MANIFEST_FILE}

# Wait for MetricsServer is Delete.
kubectl wait pod -n ${NS_SYSTEM} -l name=${DEPLOY_METRICS} --for=delete 2>/dev/null
