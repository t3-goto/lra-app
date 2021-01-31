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
FROM nginx:1.18-alpine

WORKDIR /app

EXPOSE 8001

COPY --from=build-env /app/dist /usr/share/nginx/html
COPY --from=build-env /app/docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-env /app/docker/nginx/default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT [ "/usr/sbin/nginx","-g","daemon off;","-c","/etc/nginx/nginx.conf" ]
