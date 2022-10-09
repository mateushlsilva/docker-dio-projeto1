#!/bin/bash

docker image build -t server:1.0 ./server

mkdir -p /data/mysql

docker-compose up -d

docker run --name server -ti -p 3001:3001 server:1.0