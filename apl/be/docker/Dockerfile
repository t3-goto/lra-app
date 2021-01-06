# base image
FROM node:12.16.1

# make directory
WORKDIR /usr/src/app

# copy package.json and package-lock.json
COPY package*.json ./

# install modules
RUN npm install --only=production

# copy config files
COPY config ./config

# copy dist files
COPY dist ./dist

# expose
EXPOSE 9001

# execute
CMD ["node", "./dist/main.js"]

