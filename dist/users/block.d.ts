import { Axios } from "axios";
import { OK } from "../types/ok";
export default function block(axios: Axios): (options: {
    userId: number;
}) => Promise<import("axios").AxiosResponse<OK, any>>;
