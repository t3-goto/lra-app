#!/bin/bash

# Set Variables.
FUNCTION_NAME="lambda-rds-mysql-initializer"
LOG_FILE="/dev/${FUNCTION_NAME}_log.txt"
OUT_FILE="/dev/${FUNCTION_NAME}_out.txt"

# invoke lambda function.
aws lambda invoke --function-name ${FUNCTION_NAME} --log-type Tail ${OUT_FILE} --query 'LogResult' | tr -d '"' | base64 -d >${LOG_FILE} 2>/dev/null

# show results.
cat ${LOG_FILE} && rm ${LOG_FILE}
cat ${OUT_FILE} && rm ${OUT_FILE}
