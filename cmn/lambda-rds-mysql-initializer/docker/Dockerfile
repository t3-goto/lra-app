#################################
# Runtime Stage
#################################
FROM amazon/aws-lambda-nodejs:12

EXPOSE 8080

RUN yum -y install yum-utils && \
  yum install -y git-all && \
  yum install -y https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm && \
  yum-config-manager --disable mysql80-community && \
  yum-config-manager --enable mysql57-community && \
  yum install -y mysql-community-client

ARG SOURCE_URL
ARG SOURCE_DIR
ARG SOURCE_BRANCH
ARG SOURCE_PULL_SCRIPT
ARG MYSQL_HOST
ARG MYSQL_USER
ARG MYSQL_PASS
ARG MYSQL_INIT_SCRIPT

ENV SOURCE_URL=$SOURCE_URL \
  SOURCE_DIR=$SOURCE_DIR \
  SOURCE_BRANCH=$SOURCE_BRANCH \
  SOURCE_PULL_SCRIPT=$SOURCE_PULL_SCRIPT \
  MYSQL_HOST=$MYSQL_HOST \
  MYSQL_USER=$MYSQL_USER \
  MYSQL_PASS=$MYSQL_PASS \
  MYSQL_INIT_SCRIPT=$MYSQL_INIT_SCRIPT

COPY ./scripts/mysql-init.sh /var/task/
RUN chmod +x /var/task/mysql-init.sh

COPY ./scripts/git-pull.sh /var/task/
RUN chmod +x /var/task/git-pull.sh

COPY ./dist/index.js /var/task/

CMD [ "/var/task/index.handler" ]


