import { Axios } from "axios";
import { OK } from "../types/ok";
import { Token } from "../types/token";
export default function reset(axios: Axios): (options: {
    email: string;
    verificationToken?: string;
    newPassword?: string;
}) => Promise<import("axios").AxiosResponse<OK | Token, any>>;
