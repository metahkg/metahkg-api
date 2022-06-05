Object.defineProperty(exports, "__esModule", { value: true });
function info(axios) {
    return (
    // must provide either category id or thread id
    options) => {
        const { categoryId, threadId } = options;
        return axios.get(`/category/${categoryId || `bytid${threadId}`}`);
    };
}
exports.default = info;
//# sourceMappingURL=info.js.map