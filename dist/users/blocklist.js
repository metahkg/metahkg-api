Object.defineProperty(exports, "__esModule", { value: true });
function default_1(axios) {
    () => {
        /** get blocked users */
        return axios.get("/users/blocklist");
    };
}
exports.default = default_1;
//# sourceMappingURL=blocklist.js.map