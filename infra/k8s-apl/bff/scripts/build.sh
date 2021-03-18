#!/bin/bash

# # Set variables and constatns.
PRODUCTION="prod"
DEVELOPMENT="dev"
BASE_DIR=$(
  cd $(dirname $0)
  cd ..
  pwd
)
SCRIPTS_DIR=$(dirname $0)

# # Get and Check arguments.
ENV=$1
MANIFESTS_DIR=${BASE_DIR}/manifests
MANIFEST_FILE=${MANIFESTS_DIR}/${ENV}.yml
KUSTOMIZE_BUILD_RDIR=./overlays/${ENV}

if [ -z ${ENV} ]; then
  echo "You should set environment that you want to execute, prod or dev."
  exit 1
fi
if [ ${ENV} != ${PRODUCTION} -a ${ENV} != ${DEVELOPMENT} ]; then
  echo "You should set environment that is prod or dev."
  exit 1
fi

# Kustomize build #TODO: kustomize build doesn't work at absolute path.
cd ${SCRIPTS_DIR} && cd ../ && kustomize build ${KUSTOMIZE_BUILD_RDIR} >${MANIFEST_FILE}

echo "${MANIFEST_FILE} has generated."
