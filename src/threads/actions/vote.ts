import { Axios } from "axios";
import { OK } from "../../types/ok";

export default function vote(axios: Axios) {
    return (options: { threadId: number; commentId: number; vote: "U" | "D" }) => {
        const { threadId, commentId, vote } = options;
        return axios.post<OK>(`/thread/${threadId}/vote/${commentId}`, { vote });
    };
}
