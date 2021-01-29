# Stage 1
FROM node:12-alpine3.10 as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm install @angular/cli@10.1.6
RUN node_modules/.bin/ng build --prod

# Stage 2
FROM nginx:latest
COPY --from=build-step /app/dist/gts-fe /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
