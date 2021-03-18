#!/bin/bash
set -e

# Set variables.
HOSTED_DOMAIN="lratg.com"
TARGET_DOMAIN="*.${HOSTED_DOMAIN}"
REGION="ap-northeast-1"
NONE="None"

# request certificate
echo "Request certificate for '${TARGET_DOMAIN}' to ACM."
CERT_ARN=$(
  aws acm request-certificate \
    --domain-name ${TARGET_DOMAIN} \
    --validation-method DNS \
    --region ${REGION} \
    --output text
) &&
  sleep 5 &&
  echo -e "\t CERT_ARN = ${CERT_ARN}"

# create domain validation record set
echo "Create record set to validate domain in Route 53."
VALIDATION_RECORD_NAME=$(
  aws acm describe-certificate \
    --certificate-arn ${CERT_ARN} \
    --query "Certificate.DomainValidationOptions[0].ResourceRecord.Name" \
    --region ${REGION} \
    --output text
) &&
  echo -e "\t VALIDATION_RECORD_NAME = ${VALIDATION_RECORD_NAME}"

VALIDATION_RECORD_VALUE=$(
  aws acm describe-certificate \
    --certificate-arn ${CERT_ARN} \
    --query "Certificate.DomainValidationOptions[0].ResourceRecord.Value" \
    --region ${REGION} \
    --output text
) &&
  echo -e "\t VALIDATION_RECORD_VALUE = ${VALIDATION_RECORD_VALUE}"

HOSTED_ZONE_ID=$(
  aws route53 list-hosted-zones \
    --query "HostedZones[?Name=='${HOSTED_DOMAIN}.'].Id" \
    --output text
) &&
  echo -e "\t HOSTED_ZONE_ID = ${HOSTED_ZONE_ID}"

if [ $VALIDATION_RECORD_NAME == $NONE ] || [ $VALIDATION_RECORD_VALUE == $NONE ] || [ $HOSTED_DOMAIN == $NONE ]; then
  echo "Failed to get the parameters required for domain validation."
  exit
fi

CHANGE_ID=$(
  aws route53 change-resource-record-sets \
    --hosted-zone-id ${HOSTED_ZONE_ID} \
    --change-batch \
    "{
    \"Changes\": [
      {
        \"Action\": \"CREATE\",
        \"ResourceRecordSet\": {
          \"Name\": \"${VALIDATION_RECORD_NAME}\",
          \"Type\": \"CNAME\",
          \"TTL\": 300,
          \"ResourceRecords\": [{\"Value\": \"${VALIDATION_RECORD_VALUE}\"}]
        }
      }
    ]
  }" \
    --query "ChangeInfo.Id" \
    --output text
) &&
  echo -e "\t Change ID : ${CHANGE_ID}\n"

if [ $? == 0 ]; then
  echo -e "\nFinished to request certificate and create record set to validate domain.
Please run command bellow to check validation status.

  aws acm describe-certificate \\
  --certificate-arn ${CERT_ARN} \\
  --query \"Certificate.DomainValidationOptions[0].ValidationStatus\" \\
  --region ${REGION} \\
  --output text"
else
  echo -e "\nFailed to issue certificate."
fi
