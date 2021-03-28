#!/bin/bash

# Get tags info.
TAG=$1
if [ -z "${TAG}" ]; then
  TAG="latest"
fi

# Set variables.
AWS_ACCOUNT_ID="787350286285"
AWS_REGION="ap-northeast-1"
REPOSITORY_NAME=lambda-rds-mysql-initializer
BASE_DIR=$(
  cd $(dirname $0)
  cd ..
  pwd
)
SRC_DIR=${BASE_DIR}/src
DOCKER_FILE=${BASE_DIR}/docker/Dockerfile

# docker build
cd ${BASE_DIR} && docker build -t ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${REPOSITORY_NAME}:${TAG} -f ${DOCKER_FILE} .

# ECR login (Linux)
aws ecr get-login-password | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com

# docker push
docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${REPOSITORY_NAME}:${TAG}
