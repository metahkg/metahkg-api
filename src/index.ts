import Axios from "axios";
import category from "./category";
import menu from "./menu";
import threads from "./threads";
import users from "./users";
import me from "./me";

export default function Api(options: {
    baseUrl?: string;
    token?: string;
    setToken?: (token: string) => void;
}) {
    const { baseUrl, token, setToken } = options;

    const axios = Axios.create({
        baseURL: `${baseUrl || ""}/api`,
    });

    axios.interceptors.request.use((config) => {
        if (token) config.headers.Authorization = `Bearer ${token}`;
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
        threads: threads(axios),
        users: users(axios),
        me: me(axios),
        menu: menu(axios),
        category: category(axios),
    };
}
