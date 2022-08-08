import { Client } from "./src";

const client = new Client();

client
    .thread(1)
    .then((data) => {
        const comment = data.conversation[0];
        if (!('removed' in comment))
            console.log(comment.D, comment.U);
    })
    .catch(console.error);

client.comment(1, 100).then((data) => {
    console.log(data.D);
}).catch((err) => {
    console.error(err);
});

client.category(1).then(console.log).catch(console.error);

client.threads([1,2]).then((data) => {
    console.log(data.map(d => d.id))
}).catch(console.error);
