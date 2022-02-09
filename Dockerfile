FROM node:14

ENV LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    HOST=0.0.0.0

WORKDIR /app

COPY package.json ./
RUN yarn install

COPY ./ /app

RUN yarn run build
