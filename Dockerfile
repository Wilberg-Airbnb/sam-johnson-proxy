FROM node:14

WORKDIR /Users/samjohnson/Documents/hrfiles/airbrb/proxy

COPY package.json ./

RUN npm install

COPY ./ ./