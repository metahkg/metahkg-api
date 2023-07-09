import { readFileSync, writeFileSync } from "fs";

console.log("applying patch...");

let file = readFileSync("./src/index.ts", "utf8");
file = file.replace(/([a-z|A-Z|\d]): ([a-z|A-Z|\d]+) \| undefined/g, "$1?: $2");
file = file.replace(
    /Conversation\[\]|RemovedComment\[\]/g,
    "(Conversation | RemovedComment)[]"
);
file = file.replace(
    "axios.create();\n",
    "axios.create();\n\nthis.instance.defaults.transformResponse = [];\n"
);
file = file.replace(
    'threads && threads.forEach(item => { url_ += "threads=" + encodeURIComponent("" + item) + "&"; });',
    'url_ += "threads=" + JSON.stringify(threads) + "&";'
);
file = file.concat(`export type CommentContent = HTMLComment | GameComment`);
file = file.replace(/Comment2/g, "CommentContent");

const reqFolOpt =
    /([a-z|A-Z|\d]+)\?: ([a-z|A-Z|\d]+) ?, ?([a-z|A-Z|\d]+): ([a-z|A-Z|\d]+)/g;

while (reqFolOpt.test(file)) file = file.replace(reqFolOpt, "$3: $4, $1?: $2");

writeFileSync("src/index.ts", file);
