import { Axios } from "axios";
import objToQuery from "../lib/objToQuery";
import { Image } from "../types/image";

export default function images(axios: Axios) {
    return (options: { threadId: number; commentId?: number }) => {
        const { threadId, commentId } = options;
        const query = objToQuery({ c: commentId });
        return axios.get<Image[]>(`/thread/${threadId}/images${query ? "?" + query : ""}`);
    };
}
