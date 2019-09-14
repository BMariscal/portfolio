# Extending image
FROM node:carbon AS build

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get -y install autoconf automake libtool nasm make pkg-config git apt-utils

# Create app directory
RUN mkdir -p /app
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm build

COPY . .

# Environment variables
ENV NODE_ENV production
ENV PORT 8080

RUN [ "npm", "start" ]

COPY . .

# production environment
FROM nginx:alpine
RUN rm /usr/share/nginx/html/index.html

COPY --from=build ./app/dist /usr/share/nginx/html
COPY . .

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]