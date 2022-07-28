Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("./src");
const client = new src_1.Client("https://metahkg.org/api");
client
    .thread(1)
    .then(console.log)
    .catch(console.error);
//# sourceMappingURL=test.js.map