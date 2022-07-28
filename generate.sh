#!/bin/bash

wget "https://gitlab.com/metahkg/metahkg-server/-/raw/$(git symbolic-ref --short HEAD)/openapi.yaml" && \
npx nswag openapi2tsclient /input:openapi.yaml /output:src/index.ts /template:axios && \
rm openapi.yaml && \
npx ts-node replace.ts && \
(yarn lint && yarn build || echo "please check for errors and fix them in src/index.ts")

rm -f openapi.yaml
