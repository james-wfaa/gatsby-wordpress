#!/bin/bash

contentStamp=$(curl 'https://wp.advanceuw.org/wp-json/wpcontent/v1/lastupdated')
file="./contenttimestamp.txt"
lastDateStamp=$(cat "$file")
stamp=$(date +%Y%m%d%H%M%S)
if [ "$contentStamp" != "$lastDateStamp" ]
then
    echo "$stamp - Building"
    /var/advanceuw/deployment/build.sh
    if [ $? == 0 ]
    then
        echo "$contentStamp" > $file
    fi
else
    echo "$stamp - No Build Needed"
fi
