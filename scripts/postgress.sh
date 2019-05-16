#!/bin/bash

az postgres server create \
  -g $resource_group \
  -n $db_server_name \
  --location $location \
  --admin-user $db_username \
  --admin-password $db_password \
  --sku-name B_Gen5_1 \
  --version 9.6