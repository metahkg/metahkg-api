Object.defineProperty(exports, "__esModule", { value: true });
function unpin(axios) {
    return (options) => {
        const { threadId } = options;
        return axios.put(`/thread/${threadId}/unpin`);
    };
}
exports.default = unpin;
//# sourceMappingURL=unpin.js.map