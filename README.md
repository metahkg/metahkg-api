# Metahkg Api

Wrapper for the [metahkg server](https://gitlab.com/metahkg/metahkg-server).
Generated with the [openapi spec](https://gitlab.com/metahkg/metahkg-server/-/blob/master/openapi.yaml) using [nswag](https://github.com/RicoSuter/NSwag).

## Install

```bash
yarn add @metahkg/api-client
```

## Usage

```typescript
import { Client } from "@metahkg/api";

const client = new Client("https://metahkg.org/api");

client
    .getThread(1)
    .then(console.log)
    .catch(console.error);
```
