#!/bin/bash

# Set Env.
BASE_DIR=$(
  cd $(dirname $0)
  cd ../cert
  pwd
)
KEY_PAIR_FILE=sealed-secrets-key.yml
CERT_FILE=cert.pem

# Apply Manifests.
kubectl apply -f https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.14.1/controller.yaml

# Wait for SealedSecretsController is Ready.
kubectl wait pod -n kube-system -l name=sealed-secrets-controller --for=condition=Ready

# Make Base Directory.
mkdir -p ${BASE_DIR}

if [ ! -e ${BASE_DIR}/${KEY_PAIR_FILE} ]; then
  #Get Keys Manifests.
  kubectl get secret -n kube-system -l sealedsecrets.bitnami.com/sealed-secrets-key -o yaml >${BASE_DIR}/${KEY_PAIR_FILE}
else
  #Apply Keys Manifests.
  kubectl replace --force -f ${BASE_DIR}/${KEY_PAIR_FILE}
  kubectl delete pod -n kube-system -l name=sealed-secrets-controller
  kubectl wait pod -n kube-system -l name=sealed-secrets-controller --for=condition=Ready
fi

#Get Cert.
kubeseal --fetch-cert >${BASE_DIR}/${CERT_FILE}
