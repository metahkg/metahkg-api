import { Axios } from "axios";
import { OK } from "../../types/ok";

export default function pin(axios: Axios) {
    return (options: { threadId: number; commentId: number }) => {
        const { threadId, commentId } = options;
        return axios.put<OK>(`/thread/${threadId}/comment/${commentId}/pin`, {
            cid: commentId,
        });
    };
}
