FROM alpine:3.13

RUN apk --update-cache add bash python3 py3-pip

RUN pip3 install --upgrade pip

RUN pip3 install kubernetes

COPY src/main.py /main.py

WORKDIR /

CMD ["python3","/main.py"]
