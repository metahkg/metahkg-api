var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = __importDefault(require("./categories"));
const info_1 = __importDefault(require("./info"));
function category(axios) {
    return {
        info: (0, info_1.default)(axios),
        categories: (0, categories_1.default)(axios)
    };
}
exports.default = category;
//# sourceMappingURL=index.js.map