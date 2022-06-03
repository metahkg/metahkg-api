Object.defineProperty(exports, "__esModule", { value: true });
function verify(axios) {
    return (options) => {
        const { email, code } = options;
        return axios.post(`/users/verify`, { email, code });
    };
}
exports.default = verify;
//# sourceMappingURL=verify.js.map