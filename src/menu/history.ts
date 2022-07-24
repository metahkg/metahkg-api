import { Axios } from "axios";
import objToQuery from "../lib/objToQuery";
import { Summary } from "../types/thread/thread";

export default function (axios: Axios) {
    return (options: {
        userId: number | "self";
        sort?: "Created" | "LastReply" | 0 | 1;
        page?: number;
        limit?: number;
    }) => {
        const { userId, sort, page, limit } = options;
        const query = objToQuery({
            sort: sort && { Created: 0, LastReply: 1, 0: 0, 1: 1 }[sort],
            page,
            limit,
        });
        return axios.get<Summary[]>(`/menu/history/${userId}${query ? `?${query}` : ""}`);
    };
}
