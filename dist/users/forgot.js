Object.defineProperty(exports, "__esModule", { value: true });
/** send a email to the user in which they can find a link for resetting their password */
function reset(axios) {
    return (options) => {
        const { email, rtoken } = options;
        return axios.post(`/users/forgot`, { email, rtoken });
    };
}
exports.default = reset;
//# sourceMappingURL=forgot.js.map