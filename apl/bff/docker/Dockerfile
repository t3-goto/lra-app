# base image
FROM node:latest

# make directory
WORKDIR /usr/src/app

# copy package.json and package-lock.json
COPY package*.json ./

# install modules
RUN npm install --only=production

# copy dist files
COPY dist .

# expose
EXPOSE 9001

# execute
CMD ["node", "main.js"]

