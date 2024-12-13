FROM node:20-alpine

RUN mkdir -p home/app
WORKDIR /home/app

COPY package*.json ./ 

RUN --mount=type=cache,target=/home/app/.npm \
  npm set cache /home/app/.npm && \
  npm ci

COPY ./src . 
EXPOSE 4200

CMD npm start