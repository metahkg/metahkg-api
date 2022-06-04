var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const avatars_1 = __importDefault(require("./avatars"));
const userProfile_1 = __importDefault(require("./userProfile"));
function profile(axios) {
    return {
        avatars: (0, avatars_1.default)(axios),
        userProfile: (0, userProfile_1.default)(axios),
    };
}
exports.default = profile;
//# sourceMappingURL=index.js.map