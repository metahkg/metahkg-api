import { Axios } from "axios";
import objToQuery from "../../lib/objToQuery";
import { Images } from "../../types/images";

export default function images(axios: Axios) {
    return (options: { threadId: number; commentId?: number }) => {
        const { threadId, commentId } = options;
        const query = objToQuery({ c: commentId });
        return axios.get<Images>(`/thread/${threadId}/images${query ? "?" + query : ""}`);
    };
}
