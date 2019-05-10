# Stage 1
FROM node:10.15-alpine as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:1.13.12-alpine
COPY --from=node /usr/src/app/dist/oshop /usr/share/nginx/html
COPY Docker/nginx.conf /etc/nginx/conf.d/default.conf
