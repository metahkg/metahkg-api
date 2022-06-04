Object.defineProperty(exports, "__esModule", { value: true });
function info(axios) {
    return (
    // must provide either category id or thread id
    option) => {
        return axios.get(`/category/${option.categoryId || `bytid${option.threadId}`}`);
    };
}
exports.default = info;
//# sourceMappingURL=info.js.map