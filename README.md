# Metahkg Api

Client for the [metahkg server](https://gitlab.com/metahkg/metahkg-server).
Generated with the [openapi spec](https://gitlab.com/metahkg/metahkg-server/-/blob/master/openapi.yaml) using [nswag](https://github.com/RicoSuter/NSwag).

## Regenerate

```bash
yarn generate
```

## Install

```bash
yarn add @metahkg/api
```

## Usage

Function names are based on operationIds. \
For example, if the operationId is `commentCreate`, you can use `api.commentCreate`.

```typescript
import { Client } from "@metahkg/api";

const axios = Axios.create();

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axios.interceptors.response.use((response) => {
    if (response.headers.token) localStorage.setItem("token", response.headers.token);
    return response;
});

const api = new Client("https://dev.metahkg.org/api", axios);

api
  .thread(1)
  .then(console.log)
  .catch(console.error);
```
