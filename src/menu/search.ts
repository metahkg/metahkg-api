import { Axios } from "axios";
import objToQuery from "../lib/objToQuery";
import { Summary } from "../types/thread/thread";

export default function (axios: Axios) {
    return (options: {
        page?: number;
        searchQuery: string;
        sort?: "Relevance" | "Created" | "LastReply" | 0 | 1 | 2;
        mode?: "Title" | "OP" | 0 | 1;
        limit?: number;
    }) => {
        const { page, searchQuery, sort, mode, limit } = options;
        const query = objToQuery({
            page,
            sort:
                sort &&
                { Relevance: 0, Created: 1, LastReply: 2, 0: 0, 1: 1, 2: 2 }[sort],
            mode: mode && { Title: 0, OP: 1, 0: 0, 1: 1 }[mode],
            q: searchQuery,
            limit,
        });
        return axios.get<Summary[]>(`/menu/search${query ? `?${query}` : ""}`);
    };
}
