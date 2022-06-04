import { Axios } from "axios";
import { Summary } from "../types/thread/thread";
export default function (axios: Axios): (options: {
    userId: number | "self";
    sort?: "Topic" | "LastReply";
    page?: number;
}) => Promise<import("axios").AxiosResponse<Summary[], any>>;
