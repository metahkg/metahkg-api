Object.defineProperty(exports, "__esModule", { value: true });
function default_1(axios) {
    return () => {
        /** get blocked users */
        return axios.get("/me/blocked");
    };
}
exports.default = default_1;
//# sourceMappingURL=blocked.js.map