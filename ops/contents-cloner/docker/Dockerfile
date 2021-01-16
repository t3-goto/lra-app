FROM ubuntu:16.04

RUN apt-get update && apt-get install -y git

COPY src/main.sh /main.sh

RUN chmod a+x /main.sh

WORKDIR /

CMD ["/main.sh"]
