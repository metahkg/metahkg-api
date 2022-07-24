# Metahkg Api

Wrapper for the [metahkg server](https://gitlab.com/metahkg/metahkg-server).

## Install

```bash
yarn add metahkg-api
```

## Usage

```typescript
import Api from "metahkg-api";

const api = Api({
    // choose a server or leave blank for /
    baseUrl: "https://metahkg.org",
    // user jwt token, leave blank if not logged in
    token: "eyfcsgbsaabbdwqjog",
    // action to do upon new token received in headers
    setToken: (token: string) => {
        // set token
        localStorage.setItem("token", token);
    },
});
```
