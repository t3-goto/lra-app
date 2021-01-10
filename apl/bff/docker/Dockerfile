# base image
FROM node:12.16.1

# make directory
WORKDIR /usr/src/app

# copy package.json and package-lock.json
COPY package*.json ./

# install modules
RUN npm install --production

# copy config files
COPY config ./config

# copy codegen files
COPY codegen ./codegen

# copy proto files
COPY protos ./protos

# copy dist files
COPY dist ./dist

# expose
EXPOSE 9001

# execute
CMD ["node", "./dist/main.js"]
