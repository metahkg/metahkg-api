var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = __importDefault(require("./comment"));
const create_1 = __importDefault(require("./create"));
const images_1 = __importDefault(require("./images"));
const pin_1 = __importDefault(require("./pin"));
const replies_1 = __importDefault(require("./replies"));
const unpin_1 = __importDefault(require("./unpin"));
const vote_1 = __importDefault(require("./vote"));
function comments(axios) {
    return {
        get: (0, comment_1.default)(axios),
        replies: (0, replies_1.default)(axios),
        vote: (0, vote_1.default)(axios),
        create: (0, create_1.default)(axios),
        images: (0, images_1.default)(axios),
        pin: (0, pin_1.default)(axios),
        unpin: (0, unpin_1.default)(axios),
    };
}
exports.default = comments;
//# sourceMappingURL=index.js.map