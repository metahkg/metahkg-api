import { Axios } from "axios";
import { Token } from "../types/token";
export default function verify(axios: Axios): (options: {
    email: string;
    code: string;
}) => Promise<import("axios").AxiosResponse<Token, any>>;
