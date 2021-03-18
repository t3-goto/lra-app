#!/bin/bash

# Set variables.
VERSION=0.13.4

# Setup terraform.
tfenv install ${VERSION}
tfenv use ${VERSION}
