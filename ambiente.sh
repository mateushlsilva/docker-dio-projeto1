#!/bin/bash

docker image build -t server:1.0 ./server

mkdir -p /data/mysql

docker-compose up -d
