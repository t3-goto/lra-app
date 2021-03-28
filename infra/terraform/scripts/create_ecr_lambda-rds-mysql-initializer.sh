#!/bin/bash

# Set variables.
REGION=ap-northeast-1
REPOSITORY_NAME=lambda-rds-mysql-initializer

# Create repository.
aws ecr create-repository \
--repository-name ${REPOSITORY_NAME} \
--region ${REGION}
