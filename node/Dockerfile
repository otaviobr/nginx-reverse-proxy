FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm cache clean --force

EXPOSE 3000

CMD ["node", "index.js"]