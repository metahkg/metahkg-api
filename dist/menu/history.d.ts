import { Axios } from "axios";
import { Summary } from "../types/thread/thread";
export default function (axios: Axios): (options: {
    userId: number | "self";
    sort?: "Created" | "LastReply" | 0 | 1;
    page?: number;
}) => Promise<import("axios").AxiosResponse<Summary[], any>>;
