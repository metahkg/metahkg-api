import { Axios } from "axios";
import { Token } from "../types/token";
export default function login(axios: Axios): (options: {
    /** username or email */
    userNameOrEmail: string;
    password: string;
}) => Promise<import("axios").AxiosResponse<Token, any>>;
