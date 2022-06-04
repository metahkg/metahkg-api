var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objToQuery_1 = __importDefault(require("../lib/objToQuery"));
function thread(axios) {
    return (options) => {
        const { threadId, page, start, end, sort } = options;
        const query = (0, objToQuery_1.default)({ page, start, end, sort });
        return axios.get(`/thread/${threadId}${query ? "?" + query : ""}`);
    };
}
exports.default = thread;
//# sourceMappingURL=thread.js.map