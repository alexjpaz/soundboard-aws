FROM node:5.11.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g webpack

COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/
RUN npm test
RUN webpack -p
