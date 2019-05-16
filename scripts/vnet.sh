#!/bin/bash

az network vnet create \
    -g $groupName \
    -n $netName \
    --address-prefix 172.8.0.0/24 \
    --subnet-name $subnetName \
    --subnet-prefix \
    --location 

az network vnet subnet create \
    --address-prefixes 172.8.0.0/26 \
    --name $subnetName \
    --resource-group $groupName \
    --vnet-name $netName 