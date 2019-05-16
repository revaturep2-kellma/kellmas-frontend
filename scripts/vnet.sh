#!/bin/bash

groupName=$1
netName=$2

az network vnet create -g $groupName -n $netName --location southcentralus

