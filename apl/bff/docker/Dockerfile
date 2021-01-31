################################
# Build Stage
#################################
FROM node:12.20-alpine3.10 as build-env

WORKDIR /app

COPY ./package.json yarn.lock /app/
RUN yarn install

COPY . /app
RUN yarn build && yarn install --production --cache /tmp/empty-cache && rm -rf /tmp/empty-cache

################################
# Runtime Stage
#################################
FROM node:12.20-alpine3.10

WORKDIR /app

EXPOSE 9001

COPY --from=build-env /app/dist /app/dist
COPY --from=build-env /app/node_modules /app/node_modules
COPY --from=build-env /app/codegen /app/codegen
COPY --from=build-env /app/protos /app/protos

ENTRYPOINT ["node", "./dist/main.js"]
