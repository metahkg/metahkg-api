var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const history_1 = __importDefault(require("./history"));
const threads_1 = __importDefault(require("./threads"));
const main_1 = __importDefault(require("./main"));
const search_1 = __importDefault(require("./search"));
function menu(axios) {
    return {
        threads: (0, threads_1.default)(axios),
        history: (0, history_1.default)(axios),
        /** the main menu (get threads by category) */
        main: (0, main_1.default)(axios),
        search: (0, search_1.default)(axios),
    };
}
exports.default = menu;
//# sourceMappingURL=index.js.map