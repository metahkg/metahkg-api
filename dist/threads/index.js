var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addComment_1 = __importDefault(require("./comments/addComment"));
const create_1 = __importDefault(require("./create"));
const pin_1 = __importDefault(require("./pin"));
const unpin_1 = __importDefault(require("./unpin"));
const vote_1 = __importDefault(require("./comments/vote"));
const checkExist_1 = __importDefault(require("./checkExist"));
const getComment_1 = __importDefault(require("./comments/getComment"));
const replies_1 = __importDefault(require("./comments/replies"));
const images_1 = __importDefault(require("./images"));
const thread_1 = __importDefault(require("./thread"));
const userVotes_1 = __importDefault(require("./userVotes"));
function threads(axios) {
    return {
        checkExist: (0, checkExist_1.default)(axios),
        images: (0, images_1.default)(axios),
        get: (0, thread_1.default)(axios),
        userVotes: (0, userVotes_1.default)(axios),
        pin: (0, pin_1.default)(axios),
        unpin: (0, unpin_1.default)(axios),
        create: (0, create_1.default)(axios),
        comments: {
            get: (0, getComment_1.default)(axios),
            replies: (0, replies_1.default)(axios),
            vote: (0, vote_1.default)(axios),
            add: (0, addComment_1.default)(axios),
        },
    };
}
exports.default = threads;
//# sourceMappingURL=index.js.map