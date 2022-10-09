FROM node

EXPOSE 3001

WORKDIR /home/server

COPY ./src /home/server/src
COPY ./node_modules /home/server/node_modules
COPY package.json /home/server/package.json

CMD ["npm","run", "dev"]