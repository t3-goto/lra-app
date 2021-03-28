FROM alpine:3.13

RUN apk update && apk add bash && apk add git

COPY src/main.sh /main.sh

RUN chmod a+x /main.sh

WORKDIR /

CMD ["/main.sh"]
