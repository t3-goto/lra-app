################################
# Runtime Stage
#################################
FROM amazon/aws-lambda-nodejs:12

WORKDIR /app

EXPOSE 8000

COPY . ./
RUN npm install

CMD [ "/app/index.handler" ]


