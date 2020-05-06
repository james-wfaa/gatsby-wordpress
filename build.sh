#!/bin/bash

cd /var/gatsby.uwalumni.com/deployment
#echo "removing package-lock.json"
#rm package-lock.json
#echo "result: $?"
echo "running npm install"
npm install
echo "result: $?"

if [ $? -eq 0 ]; then
  echo 'running npm install again';
  npm install
fi

if [ $? == 0 ]; then
  echo "npm install succeeded"
  stamp=$(date +%Y%m%d%H%M%S)
  echo "build time: $stamp"
  echo "running gatsby build"
  gatsby build
else
  echo "npm install failed twice - aborting"
  exit 1
fi

if [ $? == 0 ]; then
  echo "gatsby build succeeded"
  echo "running atomic.sh"
  ./atomic.sh
else
  echo "gatsby build failed with: $?"
  exit 1
fi

if [ $? == 0 ]; then
  echo "atomic.sh succeeded"
else
  echo "atomic.sh failed with: $?"
  exit 1
fi
if [ $? == 0 ]; then
  echo "running cleanup.sh"
  ./cleanup.sh
  echo "result: $?"
fi
