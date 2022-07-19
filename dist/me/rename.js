Object.defineProperty(exports, "__esModule", { value: true });
function rename(axios) {
    return (options) => {
        const { name } = options;
        return axios.put("/me/rename", {
            name,
        });
    };
}
exports.default = rename;
//# sourceMappingURL=rename.js.map