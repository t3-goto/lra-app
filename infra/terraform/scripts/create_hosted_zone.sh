#!/bin/bash
set -e

# Set variables.
HOSTED_DOMAIN="lratg.com"
TARGET_DOMAIN="*.${HOSTED_DOMAIN}"
REGION="ap-northeast-1"
NONE="None"

# create hosted zone
aws route53 create-hosted-zone --name ${HOSTED_DOMAIN} --caller-reference $(date +%Y-%m-%d_%H-%M-%S)

# TODO: should change regstered hosted zone's name server.
