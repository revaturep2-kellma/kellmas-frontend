#!/bin/bash

groupName=$1

# Create a resource group
az group create --name $groupName --location southcentralus