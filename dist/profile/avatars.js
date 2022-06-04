Object.defineProperty(exports, "__esModule", { value: true });
function default_1(axios) {
    /** returns a png image */
    return (options) => {
        const { userId } = options;
        return axios.get(`/profile/avatars/${userId}`);
    };
}
exports.default = default_1;
//# sourceMappingURL=avatars.js.map