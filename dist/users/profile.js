Object.defineProperty(exports, "__esModule", { value: true });
function default_1(axios) {
    return (options) => {
        const { userId, nameonly } = options;
        return axios.get(`/users/profile/${userId}${nameonly ? "?nameonly=1" : ""}`);
    };
}
exports.default = default_1;
//# sourceMappingURL=profile.js.map