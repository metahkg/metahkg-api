var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = __importDefault(require("./actions/comment"));
const create_1 = __importDefault(require("./actions/create"));
const pin_1 = __importDefault(require("./actions/pin"));
const unpin_1 = __importDefault(require("./actions/unpin"));
const vote_1 = __importDefault(require("./actions/vote"));
const checkExist_1 = __importDefault(require("./get/checkExist"));
const comment_2 = __importDefault(require("./get/comment/comment"));
const replies_1 = __importDefault(require("./get/comment/replies"));
const images_1 = __importDefault(require("./get/images"));
const thread_1 = __importDefault(require("./get/thread"));
const userVotes_1 = __importDefault(require("./get/userVotes"));
function threads(axios) {
    return {
        checkExist: (0, checkExist_1.default)(axios),
        images: (0, images_1.default)(axios),
        thread: (0, thread_1.default)(axios),
        userVotes: (0, userVotes_1.default)(axios),
        getComment: (0, comment_2.default)(axios),
        replies: (0, replies_1.default)(axios),
        vote: (0, vote_1.default)(axios),
        addComment: (0, comment_1.default)(axios),
        pin: (0, pin_1.default)(axios),
        unpin: (0, unpin_1.default)(axios),
        create: (0, create_1.default)(axios),
    };
}
exports.default = threads;
//# sourceMappingURL=index.js.map