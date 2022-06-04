Object.defineProperty(exports, "__esModule", { value: true });
function create(axios) {
    return (options) => {
        const { comment, rtoken, title, category } = options;
        return axios.post(`/thread/create`, {
            comment,
            rtoken,
            title,
            category,
        });
    };
}
exports.default = create;
//# sourceMappingURL=create.js.map