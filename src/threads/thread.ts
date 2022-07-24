import { Axios } from "axios";
import objToQuery from "../lib/objToQuery";
import { Thread } from "../types/thread/thread";

export default function thread(axios: Axios) {
    return (options: {
        threadId: number;
        page?: number;
        start?: number;
        end?: number;
        sort?: "score" | "time" | "latest";
        limit?: number;
    }) => {
        const { threadId, page, start, end, sort, limit } = options;
        const query = objToQuery({ page, start, end, sort, limit });
        return axios.get<Thread>(`/thread/${threadId}${query ? "?" + query : ""}`);
    };
}
