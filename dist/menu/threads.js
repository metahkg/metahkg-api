Object.defineProperty(exports, "__esModule", { value: true });
function default_1(axios) {
    return (options) => {
        const { threads } = options;
        return axios.get(`/menu/threads?threads=${JSON.stringify(threads)}`);
    };
}
exports.default = default_1;
//# sourceMappingURL=threads.js.map