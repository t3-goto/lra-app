#!/bin/bash

# If your os is linux, comment in under commands and install istioctl.
# wget https://github.com/istio/istio/releases/download/${VERSION}/istio-${VERSION}-linux-amd64.tar.gz
# tar xvf istio-${VERSION}-linux-amd64.tar.gz
# sudo mv istio-${VERSION}/bin/istioctl /usr/local/bin/

# Set variables and constatns.
# VERSION=1.8.2
NS_OPERATOR=istio-operator
NS_SYSTEM=istio-system

DEPLOY_OPERATOR=istio-operator
DEPLOY_ISTIOD=istiod
DEPLOY_INGRESSGATEWAY=istio-ingressgateway
DEPLOY_GATEWAY=ingress-gateway

PRODUCTION="prod"
DEVELOPMENT="dev"
BASE_DIR=$(
  cd $(dirname $0)
  cd ..
  pwd
)

# Get and Check arguments.
ENV=$1
MANIFESTS_DIR=${BASE_DIR}/manifests/${ENV}
NAMESPACE_MANIFEST_FILE=${MANIFESTS_DIR}/namespace.yml
OPERATOR_MANIFEST_FILE=${MANIFESTS_DIR}/istio-operator.yml
GATEWAY_MANIFEST_FILE=${MANIFESTS_DIR}/gateway.yml
SECRET_MANIFEST_FILE=${MANIFESTS_DIR}/sealed-secret.yml

if [ -z ${ENV} ]; then
  echo "You should set environment that you want to execute, prod or dev."
  exit 1
fi
if [ ${ENV} != ${PRODUCTION} -a ${ENV} != ${DEVELOPMENT} ]; then
  echo "You should set environment that is prod or dev."
  exit 1
fi
if [ ! -e ${NAMESPACE_MANIFEST_FILE} ]; then
  echo "${NAMESPACE_MANIFEST_FILE} doesn't exist."
  exit 1
fi
if [ ! -e ${OPERATOR_MANIFEST_FILE} ]; then
  echo "${OPERATOR_MANIFEST_FILE} doesn't exist."
  exit 1
fi
if [ ! -e ${GATEWAY_MANIFEST_FILE} ]; then
  echo "${GATEWAY_MANIFEST_FILE} doesn't exist."
  exit 1
fi
if [ ${ENV} = ${DEVELOPMENT} -a ! -e ${SECRET_MANIFEST_FILE} ]; then
  echo "${SECRET_MANIFEST_FILE} doesn't exist."
  exit 1
fi

# Check IstioOperator Custom Controller
kubectl get pod -n ${NS_OPERATOR} -o custom-columns=NAME:.metadata.name | grep ${DEPLOY_OPERATOR}
rtn=$?

# Apply IstioOperator Custom Controller
if [ ${rtn} = 1 ]; then
  istioctl operator init
fi

# Wait for IstioOperator Custom Controller is Ready.
kubectl wait pod -n ${NS_OPERATOR} -l name=${DEPLOY_OPERATOR} --for=condition=Ready

# Apply Namespace.
kubectl apply -f ${NAMESPACE_MANIFEST_FILE}

# Apply Sealed Secret for Development
if [ ${ENV} = ${DEVELOPMENT} ]; then
  kubectl apply -f ${SECRET_MANIFEST_FILE}
fi

# Apply IstioOperator.
kubectl apply -f ${OPERATOR_MANIFEST_FILE}

# Wait for Istiod is Ready.
rtn=1
while test ${rtn} = 1; do
  kubectl get pod -n ${NS_SYSTEM} -o custom-columns=NAME:.metadata.name | grep ${DEPLOY_ISTIOD}
  rtn=$?
  sleep 2s
  echo "Waiting for Istiod is Ready."
done
kubectl wait pod -n ${NS_SYSTEM} -l app=${DEPLOY_ISTIOD} --for=condition=Ready

# Wait for Istio Ingressgateway is Ready.
rtn=1
while test ${rtn} = 1; do
  kubectl get pod -n ${NS_SYSTEM} -o custom-columns=NAME:.metadata.name | grep ${DEPLOY_INGRESSGATEWAY}
  rtn=$?
  sleep 2s
  echo "Waiting for Istio Ingressgateway is Ready."
done
kubectl wait pod -n ${NS_SYSTEM} -l app=${DEPLOY_INGRESSGATEWAY} --for=condition=Ready

# Apply Gateway.
kubectl apply -f ${GATEWAY_MANIFEST_FILE}
