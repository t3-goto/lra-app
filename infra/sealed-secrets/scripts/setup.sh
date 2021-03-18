#!/bin/bash

# This scritpt doen't work at windows os for kubeseal unsported.

# Set variables and constatns.
BASE_DIR=$(
  cd $(dirname $0)
  cd ..
  pwd
)
CERT_DIR=${BASE_DIR}/cert
KEY_PAIR_FILE=sealed-secrets-key.yml
CERT_FILE=cert.pem

# Get sealed-secrets-key.yml from AWS Secrets Manager
aws secretsmanager get-secret-value --secret-id sealed-secrets-key --query 'SecretBinary' --output text --region ap-northeast-1 | base64 -d >${CERT_DIR}/${KEY_PAIR_FILE} 2>/dev/null

# Apply Manifests.
kubectl apply -f https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.14.1/controller.yaml

# Wait for SealedSecretsController is Ready.
kubectl wait pod -n kube-system -l name=sealed-secrets-controller --for=condition=Ready

# Make Base Directory.
mkdir -p ${CERT_DIR}

if [ ! -e ${CERT_DIR}/${KEY_PAIR_FILE} ]; then
  #Get Keys Manifests.
  kubectl get secret -n kube-system -l sealedsecrets.bitnami.com/sealed-secrets-key -o yaml >${CERT_DIR}/${KEY_PAIR_FILE}
else
  #Apply Keys Manifests.
  kubectl replace --force -f ${CERT_DIR}/${KEY_PAIR_FILE}
  kubectl delete pod -n kube-system -l name=sealed-secrets-controller
  kubectl wait pod -n kube-system -l name=sealed-secrets-controller --for=condition=Ready
fi

#Get Cert.
kubeseal --fetch-cert >${CERT_DIR}/${CERT_FILE}
