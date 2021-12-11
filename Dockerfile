FROM node:14-alpine as build

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:latest

RUN mkdir -p /var/www/
COPY --from=build /app/build /var/www/
COPY nginx.conf /etc/nginx/