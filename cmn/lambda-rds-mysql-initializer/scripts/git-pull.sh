#!/bin/bash

WORK_DIR="/tmp"

ls -a | grep .git
rtn=$?

if [ ${rtn} != "0" ]; then
  echo "Git Init"
  cd ${WORK_DIR} && git init && git config core.sparsecheckout true
  cd ${WORK_DIR} && git remote add origin ${SOURCE_URL}.git
  cd ${WORK_DIR} && echo ${SOURCE_DIR} >.git/info/sparse-checkout
fi

cd ${WORK_DIR} && git pull origin ${SOURCE_BRANCH}
