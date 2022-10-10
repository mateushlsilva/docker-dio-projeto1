FROM ubuntu

EXPOSE 3001

WORKDIR /home/server

RUN apt-get update -y && apt-get install -y nodejs && apt-get install -y npm && npm install typescript -y

COPY ./src /home/server/src
COPY ./node_modules /home/server/node_modules
COPY package.json /home/server/package.json

CMD ["npm","run", "dev"]