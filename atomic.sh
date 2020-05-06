#!/bin/bash

# current timestamp
stamp=$(date +%Y%m%d%H%M%S)
echo "build time: $stamp"
cd /var/gatsby.uwalumni.com/deployment
cp -rp ./public ../releases/$stamp
cd ..

rm ./public
ln -s ./releases/$stamp ./public
