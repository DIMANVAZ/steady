FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8081

CMD [ "http-server", "dist" ]

# docker build -t vue-steady-local .
# docker run -it -p 8080:8080 --rm --name vue-steady-local-1 vue-steady-local

# docker build -t vue-steady-heroku .
# docker run -it -p 8080:8080 --rm --name vue-steady-heroku-1 vue-steady-heroku
