#!/bin/bash

# Set Variables.
EXEC_ENV=prod #TODO:Change from a fixed value to a variable value
TERRAFORM_DIR=$(
  cd $(dirname $0)
  cd ..
  pwd
)
VAR_FILES_DIR=${TERRAFORM_DIR}/var_files
VAR_FILE=${VAR_FILES_DIR}/${EXEC_ENV}.tfvars

# terraform destroy.
cd ${TERRAFORM_DIR} && terraform destroy -var-file=${VAR_FILE} -auto-approve
