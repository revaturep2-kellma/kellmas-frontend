#!/bin/bash

groupName=$1
servicePlanName=$2
gitrepo=$3
# Create a web app.
az webapp create --resource-group $groupName --plan $servicePlanName --name $appName -r "node|10.14"

# Configure continuous deployment from GitHub.
az webapp deployment source config --name $appName --resource-group $groupName \
--repo-url $gitrepo --branch master