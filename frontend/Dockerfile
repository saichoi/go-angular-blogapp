FROM node:18.6.0-alpine3.15

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . /app
EXPOSE 4200

CMD [ "npm", "start" ]