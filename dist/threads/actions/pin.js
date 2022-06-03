Object.defineProperty(exports, "__esModule", { value: true });
function pin(axios) {
    return (options) => {
        const { threadId, commentId } = options;
        return axios.put(`/thread/${threadId}/pin`, { cid: commentId });
    };
}
exports.default = pin;
//# sourceMappingURL=pin.js.map