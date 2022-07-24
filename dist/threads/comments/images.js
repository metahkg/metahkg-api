Object.defineProperty(exports, "__esModule", { value: true });
function images(axios) {
    return (options) => {
        const { threadId, commentId } = options;
        return axios.get(`/thread/${threadId}/comment/${commentId}/images`);
    };
}
exports.default = images;
//# sourceMappingURL=images.js.map