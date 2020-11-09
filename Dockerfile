FROM node:alpine

COPY package*.json .
RUN yarn
COPY . .
RUN yarn build

EXPOSE $APP_PORT

CMD yarn start
