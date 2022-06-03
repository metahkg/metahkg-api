import { Axios } from "axios";
import { Token } from "../types/token";

export default function login(axios: Axios) {
    return (options: {
        /** username or email */
        userNameOrEmail: string;
        password: string;
    }) => {
        const { userNameOrEmail: name, password: pwd } = options;
        return axios.post<Token>("/users/login", { name, pwd });
    };
}
