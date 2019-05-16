#!/bin/bash

displayName=$1
password=$2
principalName=$3

az ad user create --display-name $displayName --password $password --user-principal-name $principalName
