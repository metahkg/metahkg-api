Object.defineProperty(exports, "__esModule", { value: true });
function vote(axios) {
    return (options) => {
        const { threadId, commentId, vote } = options;
        return axios.post(`/thread/${threadId}/comment/${commentId}/vote`, { vote });
    };
}
exports.default = vote;
//# sourceMappingURL=vote.js.map