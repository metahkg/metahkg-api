import { Axios } from "axios";
import { OK } from "../types/ok";
import { userSex } from "../types/user";
export default function register(axios: Axios): (options: {
    username: string;
    email: string;
    password: string;
    rtoken: string;
    sex: userSex;
    invitecode?: string;
}) => Promise<import("axios").AxiosResponse<OK, any>>;
