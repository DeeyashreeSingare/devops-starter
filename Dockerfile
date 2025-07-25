#Base image with Node to build the app
FROM node:18-alpine as build

WORKDIR /app
COPY . .
RUN npm install && npm run build

#Stage 2: Serve with Nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]