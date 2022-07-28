import fs from "fs";

let file = fs.readFileSync("src/index.ts", "utf8");

file.match(/[a-z|A-Z|\d]: \S+ \| undefined/g)?.forEach((i) => {
    file = file.replace(i, i.replace(":", "?:").replace(" | undefined", ""));
});

fs.writeFileSync("src/index.ts", file);
