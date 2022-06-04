import { Axios } from "axios";
import objToQuery from "../lib/objToQuery";
import { Summary } from "../types/thread/thread";

export default function (axios: Axios) {
    return (options: {
        userId: number | "self";
        sort?: "Topic" | "LastReply";
        page?: number;
    }) => {
        const { userId, sort, page } = options;
        const query = objToQuery({ sort: sort && sort === "Topic" ? 0 : 1, page });
        return axios.get<Summary[]>(`/menu/history/${userId}${query ? `?${query}` : ""}`);
    };
}
