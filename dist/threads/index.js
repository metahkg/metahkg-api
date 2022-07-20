var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = __importDefault(require("./create"));
const checkExist_1 = __importDefault(require("./checkExist"));
const images_1 = __importDefault(require("./images"));
const thread_1 = __importDefault(require("./thread"));
const comments_1 = __importDefault(require("./comments"));
function threads(axios) {
    return {
        checkExist: (0, checkExist_1.default)(axios),
        images: (0, images_1.default)(axios),
        get: (0, thread_1.default)(axios),
        create: (0, create_1.default)(axios),
        comments: (0, comments_1.default)(axios),
    };
}
exports.default = threads;
//# sourceMappingURL=index.js.map