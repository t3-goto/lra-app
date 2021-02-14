#!/bin/bash

# Set Env.
CERT_DIR=$(
  cd $(dirname $0)
  cd ../cert
  pwd
)
CERT_FILE=${CERT_DIR}/cert.pem
SECRET_DIR=$(
  cd $(dirname $1)
  pwd
)
SECRET_FILE=${SECRET_DIR}/$(basename $1)
SEALED_SECRET_FILE=${SECRET_DIR}/sealed-$(basename $1)

# Check Env.
echo "CERT_FILE: ${CERT_FILE}"
echo "SECRET_FILE: ${SECRET_FILE}"
echo "SEALED_SECRET_FILE: ${SEALED_SECRET_FILE}"

# Generate SealedSecret.
kubeseal --format=yaml --cert=${CERT_FILE} <${SECRET_FILE} >${SEALED_SECRET_FILE}
