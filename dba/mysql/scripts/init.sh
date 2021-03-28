#!/bin/bash

SQL_FILES=$(find /tmp/dba/mysql/* -type f | sort)

echo "${SQL_FILES}" | while read line; do
  echo "mysql -h ${MYSQL_HOST} -u ${MYSQL_USER} -p${MYSQL_PASS} <${line}"
  mysql -h ${MYSQL_HOST} -u ${MYSQL_USER} -p${MYSQL_PASS} <${line}
done
