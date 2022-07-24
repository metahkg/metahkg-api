Object.defineProperty(exports, "__esModule", { value: true });
function unpin(axios) {
    return (options) => {
        const { threadId, commentId } = options;
        return axios.put(`/thread/${threadId}/comment/${commentId}/unpin`);
    };
}
exports.default = unpin;
//# sourceMappingURL=unpin.js.map