#!/bin/bash

wget "https://gitlab.com/metahkg/metahkg-server/-/raw/$(git symbolic-ref --short HEAD)/openapi.yaml" && \
npx nswag openapi2tsclient /input:openapi.yaml /output:src/index.ts /template:axios && \
rm openapi.yaml && \
npx ts-node patch.ts && \
(yarn lint && yarn build || echo "please check for errors in src/index.ts and fix them")

rm -f openapi.yaml
