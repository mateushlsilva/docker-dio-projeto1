FROM: node:17

WORKDIR: ./server

EXPOSE: 3001

RUN: tsc --init

RUN: npm install --save express && npm install --save-dev @types/express && npm install --save cors && npm install --save-dev @types/cors && npm install --save sequelize && npm install --save-dev @types/sequelize

CMD ["npm","run", "dev"]