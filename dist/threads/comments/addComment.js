Object.defineProperty(exports, "__esModule", { value: true });
function addComment(axios) {
    return (options) => {
        const { threadId, comment, rtoken, quote } = options;
        return axios.post(`/thread/${threadId}/comment`, {
            comment,
            rtoken,
            quote,
        });
    };
}
exports.default = addComment;
//# sourceMappingURL=addComment.js.map