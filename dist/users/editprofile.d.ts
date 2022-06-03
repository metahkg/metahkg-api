import { Axios } from "axios";
import { OK } from "../types/ok";
import { Token } from "../types/token";
import { userSex } from "../types/user";
export default function editprofile(axios: Axios): (options: {
    name?: string;
    sex?: userSex;
}) => Promise<import("axios").AxiosResponse<OK & Token, any>>;
