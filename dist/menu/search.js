var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objToQuery_1 = __importDefault(require("../lib/objToQuery"));
function default_1(axios) {
    return (options) => {
        const { page, searchQuery, sort, mode, limit } = options;
        const query = (0, objToQuery_1.default)({
            page,
            sort: sort &&
                { Relevance: 0, Created: 1, LastReply: 2, 0: 0, 1: 1, 2: 2 }[sort],
            mode: mode && { Title: 0, OP: 1, 0: 0, 1: 1 }[mode],
            q: searchQuery,
            limit,
        });
        return axios.get(`/menu/search${query ? `?${query}` : ""}`);
    };
}
exports.default = default_1;
//# sourceMappingURL=search.js.map