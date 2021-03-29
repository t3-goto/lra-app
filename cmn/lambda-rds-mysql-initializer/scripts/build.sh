#!/bin/bash

# Get tags info.
TAG=$1
if [ -z "${TAG}" ]; then
  TAG="latest"
fi
SOURCE_BRANCH=$2
if [ -z "${SOURCE_BRANCH}" ]; then
  SOURCE_BRANCH="develop"
fi

# Set variables.
SOURCE_URL="https://github.com/t3-goto/lra-app"
SOURCE_DIR="dba/mysql"
SOURCE_PULL_SCRIPT="git-pull.sh"

AWS_ACCOUNT_ID="787350286285"
AWS_REGION="ap-northeast-1"

MYSQL_HOST="lradb.vpc.internal"
MYSQL_USER="lradb"
MYSQL_PASS="lradb111"
MYSQL_INIT_SCRIPT="mysql-init.sh"

REPOSITORY_NAME=lambda-rds-mysql-initializer
BASE_DIR=$(
  cd $(dirname $0)
  cd ..
  pwd
)
SRC_DIR=${BASE_DIR}/src
DOCKER_FILE=${BASE_DIR}/docker/Dockerfile

# docker build
cd ${BASE_DIR} && docker build -t ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${REPOSITORY_NAME}:${TAG} -f ${DOCKER_FILE} --build-arg SOURCE_URL="${SOURCE_URL}" --build-arg SOURCE_DIR="${SOURCE_DIR}" --build-arg SOURCE_BRANCH="${SOURCE_BRANCH}" --build-arg MYSQL_HOST="${MYSQL_HOST}" --build-arg MYSQL_USER="${MYSQL_USER}" --build-arg MYSQL_PASS="${MYSQL_PASS}" --build-arg MYSQL_INIT_SCRIPT="${MYSQL_INIT_SCRIPT}" --build-arg SOURCE_PULL_SCRIPT="${SOURCE_PULL_SCRIPT}" .
rtn=$?

if [ ${rtn} != "0" ]; then
  exit ${rtn}
fi

# ECR login (Linux)
aws ecr get-login-password | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com

# docker push
docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${REPOSITORY_NAME}:${TAG}
