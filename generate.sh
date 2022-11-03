#!/bin/sh

wget "https://gitlab.com/metahkg/metahkg-server/-/raw/$(git symbolic-ref --short HEAD)/openapi.yaml"
version=$(cat openapi.yaml | grep version | awk -F: '{ print $2 }' | sed 's/[" ]//g' | sed 's/-dev//g')
oldversion=$(cat package.json | grep version | awk -F: '{ print $2 }' | sed 's/[", ]//g')

if [ "$oldversion" = "$version" ]; then echo "version not changed, exiting..." && exit 0; fi;

npx nswag run nswag.json && \
rm openapi.yaml && \
npx ts-node patch.ts && \
(yarn lint && yarn build || echo "please check for errors in src/index.ts and fix them")

sed -i "s/${oldversion}/${version}/" package.json

rm -f openapi.yaml
