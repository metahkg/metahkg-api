# Metahkg Api

Access the Metahkg API.

## Install

```bash
yarn add metahkg-api
```

## Usage

```typescript
import Api from "metahkg-api";

async function main() {
    const api = Api({
        // choose a server or leave blank for /
        baseUrl: "https://metahkg.org",
        // user jwt token, leave blank if not logged in
        token: "eyfcsgbsaabbdwqjog",
    });
}

await api.threads.thread({ threadId: 1 }).then(console.log);
```
