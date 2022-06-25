var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objToQuery_1 = __importDefault(require("../lib/objToQuery"));
function default_1(axios) {
    return (options) => {
        const { userId, sort, page } = options;
        const query = (0, objToQuery_1.default)({
            sort: sort && { Created: 0, LastReply: 1, 0: 0, 1: 1 }[sort],
            page,
        });
        return axios.get(`/menu/history/${userId}${query ? `?${query}` : ""}`);
    };
}
exports.default = default_1;
//# sourceMappingURL=history.js.map