var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objToQuery_1 = __importDefault(require("../lib/objToQuery"));
function default_1(axios) {
    return (options) => {
        const { categoryId, sort, page } = options;
        const query = (0, objToQuery_1.default)({
            sort: sort && { Latest: 0, Viral: 1, 0: 0, 1: 1 }[sort],
            page,
        });
        return axios.get(`/menu/${categoryId}${query ? `?${query}` : ""}`);
    };
}
exports.default = default_1;
//# sourceMappingURL=main.js.map