# Metahkg Api

Wrapper for the [metahkg server](https://gitlab.com/metahkg/metahkg-server).
Generated with the [openapi spec](https://gitlab.com/metahkg/metahkg-server/-/blob/master/openapi.yaml) using [nswag](https://github.com/RicoSuter/NSwag).

## Install

```bash
yarn add @metahkg/api
```

## Usage

```typescript
import { Client } from "@metahkg/api";

const client = new Client();

client
    .thread(1)
    .then(console.log)
    .catch(console.error);
```
