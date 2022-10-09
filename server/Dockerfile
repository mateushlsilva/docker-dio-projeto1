FROM node

EXPOSE 3001

RUN npm install --save express && npm install --save-dev @types/express && npm install --save cors && npm install --save-dev @types/cors && npm install --save sequelize && npm install --save-dev @types/sequelize 
RUN npm install --save ts-node 

CMD ["npm","run", "dev"]