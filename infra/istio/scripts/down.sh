#!/bin/bash

# Set variables.
# VERSION=1.8.2
NS_OPERATOR=istio-operator
NS_SYSTEM=istio-system

DEPLOY_OPERATOR=istio-operator
DEPLOY_ISTIOD=istiod
DEPLOY_INGRESSGATEWAY=istio-ingressgateway

# If your os is linux, comment in under commands and install istioctl.
# wget https://github.com/istio/istio/releases/download/${VERSION}/istio-${VERSION}-linux-amd64.tar.gz
# tar xvf istio-${VERSION}-linux-amd64.tar.gz
# sudo mv istio-${VERSION}/bin/istioctl /usr/local/bin/

# Delete IstioSystem
kubectl delete ns ${NS_SYSTEM}

# Delete IstioOperator
istioctl operator remove

# Wait for Istio Operator Custom Controller is Delete.
kubectl wait pod -n ${NS_OPERATOR} -l name=${DEPLOY_OPERATOR} --for=delete 2>/dev/null
