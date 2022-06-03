Object.defineProperty(exports, "__esModule", { value: true });
function vote(axios) {
    return (options) => {
        const { threadId, commentId, vote } = options;
        return axios.post(`/thread/${threadId}/vote/${commentId}`, { vote });
    };
}
exports.default = vote;
//# sourceMappingURL=vote.js.map