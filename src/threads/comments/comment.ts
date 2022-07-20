import { Axios } from "axios";
import { Comment } from "../../types/thread/comment";

export default function getComment(axios: Axios) {
    return (options: { threadId: number; commentId: number }) => {
        const { threadId, commentId } = options;
        return axios.get<Comment>(`/thread/${threadId}/comment/${commentId}`);
    };
}