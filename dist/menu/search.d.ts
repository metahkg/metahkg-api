import { Axios } from "axios";
import { Summary } from "../types/thread/thread";
export default function (axios: Axios): (options: {
    page?: number;
    searchQuery: string;
    sort?: "Relevence" | "Topic" | "LastReply";
    mode?: "Title" | "OP";
}) => Promise<import("axios").AxiosResponse<Summary[], any>>;
