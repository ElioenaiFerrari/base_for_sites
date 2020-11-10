#!/bin/bash


certificate=$(ls ./ | grep *.crt)

if [ -z $certificate ] 
then
  echo "building ssl..."
  make ssl
  echo "building complete."
fi

APP_HOST=$(cat .env | grep APP_HOST | cut -d= -f2)
search_host=$(cat /etc/resolv.conf | grep $APP_HOST)

if [ -z $search_host ]
then
  echo "registering host..."
  echo "nameserver 127.0.0.1\\
        search $APP_HOST\\
        options ndots:2" >> /etc/resolv.conf
fi