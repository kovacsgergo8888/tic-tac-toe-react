FROM node:18 as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:stable as server

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
