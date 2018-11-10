# stage 1 - build application
FROM node:8.12.0-alpine as build-stage
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# stage 2 - deploy
FROM nginx:1.15.2-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]