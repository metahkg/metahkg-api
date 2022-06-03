var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objToQuery_1 = __importDefault(require("../../lib/objToQuery"));
function checkExist(axios) {
    return (options) => {
        const { threadId } = options;
        const query = (0, objToQuery_1.default)({ id: threadId });
        return axios.get(`/thread/check${query ? "?" + query : ""}`);
    };
}
exports.default = checkExist;
//# sourceMappingURL=checkExist.js.map