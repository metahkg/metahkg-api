var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const avatar_1 = __importDefault(require("./avatar"));
const block_1 = __importDefault(require("./block"));
const rename_1 = __importDefault(require("./rename"));
const status_1 = __importDefault(require("./status"));
const unblock_1 = __importDefault(require("./unblock"));
const blocked_1 = __importDefault(require("./blocked"));
const votes_1 = __importDefault(require("./votes"));
function users(axios) {
    return {
        avatar: (0, avatar_1.default)(axios),
        rename: (0, rename_1.default)(axios),
        status: (0, status_1.default)(axios),
        block: (0, block_1.default)(axios),
        unblock: (0, unblock_1.default)(axios),
        blocked: (0, blocked_1.default)(axios),
        votes: (0, votes_1.default)(axios),
    };
}
exports.default = users;
//# sourceMappingURL=index.js.map