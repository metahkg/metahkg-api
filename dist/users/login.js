Object.defineProperty(exports, "__esModule", { value: true });
function login(axios) {
    return (options) => {
        const { userNameOrEmail: name, password: pwd } = options;
        return axios.post("/users/login", { name, pwd });
    };
}
exports.default = login;
//# sourceMappingURL=login.js.map