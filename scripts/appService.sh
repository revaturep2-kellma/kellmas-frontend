#!/bin/bash

groupName=$1
servicePlanName=$2
gitrepo=$3

# Create an App Service 
az appservice plan create --name $servicePlanName --resource-group $groupName --sku "F1" --location southcentralus --is-linux

# Configure continuous deployment from GitHub.
az webapp deployment source config --name $appName --resource-group $groupName \
--repo-url $gitrepo --branch master
