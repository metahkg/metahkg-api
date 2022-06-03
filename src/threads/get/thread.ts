import { Axios } from "axios";
import objToQuery from "../../lib/objToQuery";
import { Thread } from "../../types/thread/thread";

export default function thread(axios: Axios) {
    return (options: {
        threadId: number;
        page?: number;
        start?: number;
        end?: number;
        sort?: "vote";
    }) => {
        const { threadId, page, start, end, sort } = options;
        const query = objToQuery({ page, start, end, sort });
        return axios.get<Thread>(`/thread/${threadId}${query ? "?" + query : ""}`);
    };
}
