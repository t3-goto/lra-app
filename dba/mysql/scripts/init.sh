#!/bin/bash

DDL_FILES=$(find /tmp/dba/mysql/ddl/* -type f | sort)

echo "${DDL_FILES}" | while read line; do
  echo "mysql -h ${MYSQL_HOST} -u ${MYSQL_USER} -p${MYSQL_PASS} <${line}"
  mysql -h ${MYSQL_HOST} -u ${MYSQL_USER} -p${MYSQL_PASS} <${line}
done
