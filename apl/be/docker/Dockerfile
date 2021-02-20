################################
# Build Stage
#################################
FROM node:12.20-alpine3.10 as build-env

WORKDIR /app

COPY ./package.json yarn.lock /app/
RUN yarn install

COPY . /app
RUN yarn build && yarn install --production --cache /tmp/empty-cache && rm -rf /tmp/empty-cache

RUN GRPC_HEALTH_PROBE_VERSION=v0.3.1 && \
  wget -qO/bin/grpc_health_probe https://github.com/grpc-ecosystem/grpc-health-probe/releases/download/${GRPC_HEALTH_PROBE_VERSION}/grpc_health_probe-linux-amd64 && \
  chmod +x /bin/grpc_health_probe

################################
# Runtime Stage
#################################
FROM node:12.20-alpine3.10

WORKDIR /app

EXPOSE 9011

COPY --from=build-env /app/dist /app/dist
COPY --from=build-env /app/node_modules /app/node_modules
COPY --from=build-env /app/codegen /app/codegen
COPY --from=build-env /app/protos /app/protos
COPY --from=build-env /bin/grpc_health_probe /bin/grpc_health_probe

ENTRYPOINT ["node", "./dist/main.js"]
