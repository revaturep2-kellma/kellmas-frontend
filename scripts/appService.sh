#!/bin/bash

groupName=$1
location=southcentralus
servicePlanName=$2
appPlan=$3
appName=$4
gitrepo=$5
instances=$6

# Create an App Service 
az appservice plan create --name $servicePlanName --resource-group $groupName --sku $appPlan --location $location --is-linux

# Create a web app.
az webapp create --resource-group $groupName --plan $servicePlanName --name $appName -r "node|10.14"

# Configure continuous deployment from GitHub.
az webapp deployment source config --name $appName --resource-group $groupName \
--repo-url $gitrepo --branch master

# add instances 
az appservice plan update -g $groupName -n $servicePlanName --number-of-workers $instances

