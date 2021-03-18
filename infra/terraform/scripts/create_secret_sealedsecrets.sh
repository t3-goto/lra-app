#!/bin/bash

# Set Variables.
SECRET_NAME=sealed-secrets-key

# Create Secret.
aws secretsmanager create-secret --name ${SECRET_NAME} --secret-binary fileb://~/.secrets/sealed-secrets-key.yml
