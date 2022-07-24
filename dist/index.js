var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const category_1 = __importDefault(require("./category"));
const menu_1 = __importDefault(require("./menu"));
const threads_1 = __importDefault(require("./threads"));
const users_1 = __importDefault(require("./users"));
const me_1 = __importDefault(require("./me"));
function Api(options) {
    const { baseUrl, token, setToken } = options;
    const axios = axios_1.default.create({
        baseURL: `${baseUrl || ""}/api`,
    });
    axios.interceptors.request.use((config) => {
        if (token)
            config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
    axios.interceptors.response.use((response) => {
        if (response.headers.token)
            setToken
                ? setToken(response.headers.token)
                : localStorage.setItem("token", response.headers.token);
        return response;
    });
    return {
        threads: (0, threads_1.default)(axios),
        users: (0, users_1.default)(axios),
        me: (0, me_1.default)(axios),
        menu: (0, menu_1.default)(axios),
        category: (0, category_1.default)(axios),
    };
}
exports.default = Api;
//# sourceMappingURL=index.js.map