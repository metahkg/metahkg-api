Object.defineProperty(exports, "__esModule", { value: true });
function editprofile(axios) {
    return (options) => {
        const { name, sex } = options;
        return axios.put("/users/editprofile", {
            name,
            sex,
        });
    };
}
exports.default = editprofile;
//# sourceMappingURL=editprofile.js.map