Object.defineProperty(exports, "__esModule", { value: true });
function status(axios) {
    return () => {
        return axios.get("/me/status");
    };
}
exports.default = status;
//# sourceMappingURL=status.js.map