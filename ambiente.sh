#!/bin/bash

docker image build -t server:1.0 ./server

docker-compose up -d

echo "Inicializando o servidor por favor espere um pouco!" && sleep 20

docker run --name server -dti -p 3001:3001 server:1.0