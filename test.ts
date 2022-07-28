import { Client } from "./src";

const client = new Client("https://metahkg.org/api");

client
    .getThread(1)
    .then(console.log)
    .catch(console.error);
