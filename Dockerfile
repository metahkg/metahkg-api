FROM node:18-alpine as build

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./tsconfig.json ./

RUN yarn install

COPY ./src ./src

RUN yarn build

FROM node:18-alpine

RUN adduser user -D
WORKDIR /home/user
USER user

COPY ./package.json ./
COPY --from=build /usr/src/app/dist ./dist
