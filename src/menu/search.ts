import { Axios } from "axios";
import objToQuery from "../lib/objToQuery";
import { Summary } from "../types/thread/thread";

export default function (axios: Axios) {
    return (options: {
        page?: number;
        searchQuery: string;
        sort?: "Relevence" | "Topic" | "LastReply";
        mode?: "Title" | "OP";
    }) => {
        const { page, searchQuery, sort, mode } = options;
        const query = objToQuery({
            page,
            sort: sort && { Relevence: 0, Topic: 1, LastReply: 2 }[sort],
            mode: mode && mode === "Title" ? 0 : 1,
            q: searchQuery,
        });
        return axios.get<Summary[]>(`/menu/search${query ? `?${query}` : ""}`);
    };
}
