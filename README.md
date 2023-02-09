### Add *.dockerignore* file:

    node_modules
    npm-debug.log
    Dockerfile
    Dockerfile.dev
    .dockerignore
    docker-compose.dev.yml

### DEV

The docker container every time we make any changes in the source files id auto reloading.

##### Add *.docker-compose.dev.yml* file:
    version: "3"
    services:
      app:
        container_name: dev-react-app-first-image
        image: dev-react-app-first-image
        build:
          context: .
          dockerfile: Dockerfile.dev
        volumes:
          - '.:/app'
          - '/app/node_modules'
        ports:
          - "5555:8080"
        environment:
          - WATCHPACK_POLLING=true

##### Add *Dockerfile.dev* file:
    FROM node:current-alpine    
    WORKDIR /app
    COPY package.json ./
    COPY yarn.lock ./
    RUN yarn install --frozen-lockfile
    COPY . .
    EXPOSE 8080
    CMD ["npm", "start"]

##### Run

docker-compose -f docker-compose.dev.yml up

##### Access in the browser

http://localhost:5555/

### PROD

##### Add *Dockerfile* file:

    FROM node:14-alpine AS builder
    WORKDIR /app
    COPY package.json ./
    COPY yarn.lock ./
    RUN yarn install --frozen-lockfile
    COPY . .
    RUN yarn build
    
    FROM nginx:1.19-alpine AS server
    COPY --from=builder ./app/dist /usr/share/nginx/html

##### Build

docker build -t prod-react-app-first-container .

##### Run

docker run -p 5555:80 prod-react-app-first-container

##### Access in the browser

http://localhost:5555/



`
