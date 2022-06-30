import { Axios } from "axios";
import { OK } from "../types/ok";
export default function unblock(axios: Axios): (options: {
    userId: number;
}) => Promise<import("axios").AxiosResponse<OK, any>>;
