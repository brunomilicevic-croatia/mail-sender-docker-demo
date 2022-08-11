FROM node:18.7.0-alpine3.16

WORKDIR /app

COPY . .

RUN npm install

ENV MAIL_SERVER_HOST=mail-server

CMD node index.js