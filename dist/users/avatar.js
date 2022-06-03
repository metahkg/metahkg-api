Object.defineProperty(exports, "__esModule", { value: true });
function avatar(axios) {
    return (options) => {
        const { avatar } = options;
        const formData = new FormData();
        formData.append("avatar", avatar);
        return axios.post("/users/avatar", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
    };
}
exports.default = avatar;
//# sourceMappingURL=avatar.js.map