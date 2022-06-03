Object.defineProperty(exports, "__esModule", { value: true });
function userVotes(axios) {
    return (options) => {
        const { threadId } = options;
        return axios.get(`/thread/${threadId}/uservotes`);
    };
}
exports.default = userVotes;
//# sourceMappingURL=userVotes.js.map