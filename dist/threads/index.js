var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = __importDefault(require("./comments/create"));
const create_2 = __importDefault(require("./create"));
const vote_1 = __importDefault(require("./comments/vote"));
const checkExist_1 = __importDefault(require("./checkExist"));
const comment_1 = __importDefault(require("./comments/comment"));
const replies_1 = __importDefault(require("./comments/replies"));
const images_1 = __importDefault(require("./images"));
const thread_1 = __importDefault(require("./thread"));
function threads(axios) {
    return {
        checkExist: (0, checkExist_1.default)(axios),
        images: (0, images_1.default)(axios),
        get: (0, thread_1.default)(axios),
        create: (0, create_2.default)(axios),
        comments: {
            get: (0, comment_1.default)(axios),
            replies: (0, replies_1.default)(axios),
            vote: (0, vote_1.default)(axios),
            create: (0, create_1.default)(axios),
        },
    };
}
exports.default = threads;
//# sourceMappingURL=index.js.map