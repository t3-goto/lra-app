#!/bin/bash

# Set Variables.
EXEC_ENV=prod #TODO:Change from a fixed value to a variable value
TERRAFORM_DIR=$(
  cd $(dirname $0)
  cd ..
  pwd
)
VAR_FILES_DIR=${TERRAFORM_DIR}/var_files
BACKEND_CONF_FILE=${VAR_FILES_DIR}/${EXEC_ENV}.tfbackend

# terraform init.
cd ${TERRAFORM_DIR} && terraform init -reconfigure -backend-config=${BACKEND_CONF_FILE}
