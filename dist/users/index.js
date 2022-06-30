var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const avatar_1 = __importDefault(require("./avatar"));
const block_1 = __importDefault(require("./block"));
const rename_1 = __importDefault(require("./rename"));
const login_1 = __importDefault(require("./login"));
const register_1 = __importDefault(require("./register"));
const resend_1 = __importDefault(require("./resend"));
const reset_1 = __importDefault(require("./reset"));
const status_1 = __importDefault(require("./status"));
const unblock_1 = __importDefault(require("./unblock"));
const verify_1 = __importDefault(require("./verify"));
const forgot_1 = __importDefault(require("./forgot"));
const blocklist_1 = __importDefault(require("./blocklist"));
function users(axios) {
    return {
        uploadAvatar: (0, avatar_1.default)(axios),
        rename: (0, rename_1.default)(axios),
        login: (0, login_1.default)(axios),
        register: (0, register_1.default)(axios),
        verify: (0, verify_1.default)(axios),
        resend: (0, resend_1.default)(axios),
        forgot: (0, forgot_1.default)(axios),
        reset: (0, reset_1.default)(axios),
        status: (0, status_1.default)(axios),
        block: (0, block_1.default)(axios),
        unblock: (0, unblock_1.default)(axios),
        blocklist: (0, blocklist_1.default)(axios),
    };
}
exports.default = users;
//# sourceMappingURL=index.js.map