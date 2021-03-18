#!/bin/bash

# Set Variables.
SECRET_NAME=lra-key

# Create Secret.
aws secretsmanager create-secret --name ${SECRET_NAME} --secret-binary fileb://~/.ssh/id_rsa

# Import Public Key for Key Pair.
aws ec2 import-key-pair --key-name ${SECRET_NAME} --public-key-material fileb://~/.ssh/id_rsa.pub
