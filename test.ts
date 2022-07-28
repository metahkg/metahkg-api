import { Client } from "./src";

const client = new Client("https://dev.metahkg.org/api");

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
})
