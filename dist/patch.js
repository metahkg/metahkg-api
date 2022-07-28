var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let file = fs_1.default.readFileSync("src/index.ts", "utf8");
(_a = file.match(/[a-z|A-Z|\d]: \S+ \| undefined/g)) === null || _a === void 0 ? void 0 : _a.forEach((i) => {
    file = file.replace(i, i.replace(":", "?:").replace(" | undefined", ""));
});
file = file.replaceAll();
fs_1.default.writeFileSync("src/index.ts", file);
//# sourceMappingURL=patch.js.map