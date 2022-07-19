Object.defineProperty(exports, "__esModule", { value: true });
function block(axios) {
    return (options) => {
        const { userId } = options;
        return axios.post(`/me/block`, { userId });
    };
}
exports.default = block;
//# sourceMappingURL=block.js.map