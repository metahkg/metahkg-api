import { readFileSync, writeFileSync } from "fs";

console.log("applying patch...");

let file = readFileSync("./src/index.ts", "utf8");
file = file.replace(/([a-z|A-Z|\d]): ([a-z|A-Z|\d]+) \| undefined/g, "$1?: $2");
file = file.replace(/Conversation\[\]|RemovedComment\[\]/g, "(Conversation | RemovedComment)[]");

const reqFolOpt =
    /([a-z|A-Z|\d]+)\?: ([a-z|A-Z|\d]+) ?, ?([a-z|A-Z|\d]+): ([a-z|A-Z|\d]+)/g;

while (reqFolOpt.test(file)) file = file.replace(reqFolOpt, "$3: $4, $1?: $2");

writeFileSync("src/index.ts", file);
