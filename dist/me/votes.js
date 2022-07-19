Object.defineProperty(exports, "__esModule", { value: true });
function votes(axios) {
    return (options) => {
        const { threadId } = options;
        return axios.get(`/me/votes/${threadId}`);
    };
}
exports.default = votes;
//# sourceMappingURL=votes.js.map