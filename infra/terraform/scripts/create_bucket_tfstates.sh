#!/bin/bash

# Set variables.
REGION=ap-northeast-1
BUCKET_NAME=tfstates-lra

# Create bucket.
aws s3api create-bucket --bucket ${BUCKET_NAME} --create-bucket-configuration LocationConstraint=${REGION}
aws s3api put-bucket-versioning --bucket ${BUCKET_NAME} --versioning-configuration Status=Enabled
aws s3api put-bucket-encryption --bucket ${BUCKET_NAME} --server-side-encryption-configuration '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}'
aws s3api put-public-access-block --bucket ${BUCKET_NAME} --public-access-block-configuration '{"BlockPublicAcls":true,"IgnorePublicAcls":true,"BlockPublicPolicy":true,"RestrictPublicBuckets":true}'
