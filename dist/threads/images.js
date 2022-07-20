Object.defineProperty(exports, "__esModule", { value: true });
function images(axios) {
    return (options) => {
        const { threadId } = options;
        return axios.get(`/thread/${threadId}/images`);
    };
}
exports.default = images;
//# sourceMappingURL=images.js.map