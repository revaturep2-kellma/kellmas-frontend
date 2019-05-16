#!/bin/bash

groupName=$1
dbServerName=$2
dbUsername=$3
dbPassword=$4

az postgres server create -g $groupName -n $dbServerName --location southcentralus --admin-user $dbUsername --admin-password $dbPassword --sku-name B_Gen5_1 --version 9.6