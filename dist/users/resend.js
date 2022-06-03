Object.defineProperty(exports, "__esModule", { value: true });
function resend(axios) {
    return (options) => {
        const { email, rtoken } = options;
        return axios.post(`/users/resend`, { email, rtoken });
    };
}
exports.default = resend;
//# sourceMappingURL=resend.js.map