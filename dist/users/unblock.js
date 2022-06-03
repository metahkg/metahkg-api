Object.defineProperty(exports, "__esModule", { value: true });
function unblock(axios) {
    return (options) => {
        const { userId } = options;
        return axios.post(`/users/unblock`, { userId });
    };
}
exports.default = unblock;
//# sourceMappingURL=unblock.js.map