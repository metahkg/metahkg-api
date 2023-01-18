FROM node:18-alpine as build

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./tsconfig.json ./

RUN yarn install

COPY ./src ./src

RUN yarn build

FROM node:18-alpine

WORKDIR /app

COPY ./package.json ./
COPY --from=build /app/dist ./dist

RUN chown -Rf node:node /app

USER node

