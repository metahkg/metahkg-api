Object.defineProperty(exports, "__esModule", { value: true });
function objToQuery(obj) {
    return Object.keys(obj)
        .filter((key) => obj[key])
        .map((key) => `${key}=${obj[key]}`)
        .join("&");
}
exports.default = objToQuery;
//# sourceMappingURL=objToQuery.js.map