import { Axios } from "axios";
import { Summary } from "../types/thread/thread";
export default function (axios: Axios): (options: {
    page?: number;
    searchQuery: string;
    sort?: "Relevance" | "Topic" | "LastReply" | 0 | 1 | 2;
    mode?: "Title" | "OP";
}) => Promise<import("axios").AxiosResponse<Summary[], any>>;
