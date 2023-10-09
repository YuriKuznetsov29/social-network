FROM node:18

WORKDIR /app

COPY server/package.json /app

RUN npm install

COPY server /app

COPY client/build /app/client

COPY client/public/locales /app/client/locales

EXPOSE 8082

CMD [ "npm", "start" ]