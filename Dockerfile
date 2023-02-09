FROM node:14-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:1.19-alpine AS server
COPY --from=builder ./app/dist /usr/share/nginx/html