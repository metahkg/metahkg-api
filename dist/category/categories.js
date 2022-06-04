Object.defineProperty(exports, "__esModule", { value: true });
function categories(axios) {
    return () => {
        return axios.get("/category");
    };
}
exports.default = categories;
//# sourceMappingURL=categories.js.map