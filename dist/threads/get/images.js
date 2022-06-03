var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objToQuery_1 = __importDefault(require("../../lib/objToQuery"));
function images(axios) {
    return (options) => {
        const { threadId, commentId } = options;
        const query = (0, objToQuery_1.default)({ c: commentId });
        return axios.get(`/thread/${threadId}/images${query ? "?" + query : ""}`);
    };
}
exports.default = images;
//# sourceMappingURL=images.js.map