FROM node:18-alpine as build

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./tsconfig.json ./

RUN yarn install

COPY ./src ./src

RUN yarn build

FROM node:18-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY --from=build ./dist ./dist
