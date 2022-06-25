import { Axios } from "axios";
import { OK } from "../types/ok";
import { Token } from "../types/token";
export default function rename(axios: Axios): (options: {
    name: string;
}) => Promise<import("axios").AxiosResponse<OK & Token, any>>;
