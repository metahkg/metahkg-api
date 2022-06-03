Object.defineProperty(exports, "__esModule", { value: true });
function register(axios) {
    return (options) => {
        const { username: name, email, password: pwd, rtoken, sex, invitecode } = options;
        return axios.post(`/users/register`, {
            name,
            email,
            pwd,
            rtoken,
            sex,
            invitecode,
        });
    };
}
exports.default = register;
//# sourceMappingURL=register.js.map