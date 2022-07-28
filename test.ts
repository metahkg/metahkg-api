import { Client } from "./src";

const client = new Client("https://metahkg.org/api");

client
    .thread(1)
    .then((data) => {
        const comment = data.conversation[0];
        if (!('removed' in comment))
            console.log(comment.D, comment.U);
    })
    .catch(console.error);

client.comment(1, 1).then((data) => {
    console.log(data.D);
}).catch(console.error);

client.category("bytid17").then(console.log).catch(console.error);

client.menuThreads([1,2]).then((data) => {
    console.log(data.map(d => d.id))
}).catch(console.error);
