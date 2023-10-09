FROM node:18

WORKDIR /app

COPY server/package.json /app

RUN npm install

COPY server /app

COPY client/build /app/client

EXPOSE 8082

CMD [ "npm", "start" ]