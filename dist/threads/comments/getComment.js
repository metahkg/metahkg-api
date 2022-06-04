Object.defineProperty(exports, "__esModule", { value: true });
function getComment(axios) {
    return (options) => {
        const { threadId, commentId } = options;
        return axios.get(`/thread/${threadId}/comment/${commentId}`);
    };
}
exports.default = getComment;
//# sourceMappingURL=getComment.js.map