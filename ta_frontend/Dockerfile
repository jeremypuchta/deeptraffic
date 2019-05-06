FROM node:11.12.0-alpine as node

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY . /usr/src/app/

EXPOSE 3000

CMD ["npm", "start"]