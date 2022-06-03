Object.defineProperty(exports, "__esModule", { value: true });
function reset(axios) {
    return (options) => {
        const { email, verificationToken: token, newPassword: pwd } = options;
        return axios.post(`/users/reset`, {
            email,
            token,
            pwd,
        });
    };
}
exports.default = reset;
//# sourceMappingURL=reset.js.map