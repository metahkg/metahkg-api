Object.defineProperty(exports, "__esModule", { value: true });
function replies(axios) {
    return (options) => {
        const { threadId, commentId } = options;
        return axios.get(`/thread/${threadId}/comment/${commentId}/replies`);
    };
}
exports.default = replies;
//# sourceMappingURL=replies.js.map