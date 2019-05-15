#!/bin/bash

VMname=$1
groupName=$2

az vm create -n $VMname -g $groupName --size B1S