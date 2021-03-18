#!/bin/bash

# # Set variables and constatns.
PRODUCTION="prod"
DEVELOPMENT="dev"
BASE_DIR=$(
  cd $(dirname $0)
  cd ..
  pwd
)

# # Get and Check arguments.
ENV=$1
MANIFESTS_DIR=${BASE_DIR}/manifests
MANIFEST_FILE=${MANIFESTS_DIR}/${ENV}.yml

if [ -z ${ENV} ]; then
  echo "You should set environment that you want to execute, prod or dev."
  exit 1
fi
if [ ${ENV} != ${PRODUCTION} -a ${ENV} != ${DEVELOPMENT} ]; then
  echo "You should set environment that is prod or dev."
  exit 1
fi
if [ ! -e ${MANIFEST_FILE} ]; then
  echo "${NAMESPACE_MANIFEST_FILE} doesn't exist."
  exit 1
fi

# Delete Manifests.
kubectl delete -f ${MANIFEST_FILE}

echo "${MANIFEST_FILE} has deleted."
