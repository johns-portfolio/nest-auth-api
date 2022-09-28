# Build stage
FROM node:16.15.0-alpine as build-stage

WORKDIR /usr/src/source

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

# RUN yarn lint
# RUN yarn test
RUN yarn build

# Run stage
FROM node:16.15.0-alpine

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/source/node_modules ./node_modules

COPY --from=build-stage /usr/src/source/dist ./dist

EXPOSE 3000

CMD ["node", "./dist/main.js"]