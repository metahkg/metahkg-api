import { Axios } from "axios";
import { Summary } from "../types/thread/thread";
export default function (axios: Axios): (options: {
    page?: number;
    searchQuery: string;
    sort?: "Relevance" | "Created" | "LastReply" | 0 | 1 | 2;
    mode?: "Title" | "OP" | 0 | 1;
}) => Promise<import("axios").AxiosResponse<Summary[], any>>;
