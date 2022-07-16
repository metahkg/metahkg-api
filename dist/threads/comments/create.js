Object.defineProperty(exports, "__esModule", { value: true });
function createComment(axios) {
    return (options) => {
        const { threadId, comment, rtoken, quote } = options;
        return axios.post(`/thread/${threadId}/comment`, {
            comment,
            rtoken,
            quote,
        });
    };
}
exports.default = createComment;
//# sourceMappingURL=create.js.map