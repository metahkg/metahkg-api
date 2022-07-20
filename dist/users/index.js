var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("./login"));
const register_1 = __importDefault(require("./register"));
const resend_1 = __importDefault(require("./resend"));
const reset_1 = __importDefault(require("./reset"));
const verify_1 = __importDefault(require("./verify"));
const forgot_1 = __importDefault(require("./forgot"));
const avatars_1 = __importDefault(require("./avatars"));
const profile_1 = __importDefault(require("./profile"));
function users(axios) {
    return {
        login: (0, login_1.default)(axios),
        register: (0, register_1.default)(axios),
        verify: (0, verify_1.default)(axios),
        resend: (0, resend_1.default)(axios),
        forgot: (0, forgot_1.default)(axios),
        reset: (0, reset_1.default)(axios),
        avatars: (0, avatars_1.default)(axios),
        profile: (0, profile_1.default)(axios),
    };
}
exports.default = users;
//# sourceMappingURL=index.js.map