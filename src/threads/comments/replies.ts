import { Axios } from "axios";

export default function replies(axios: Axios) {
    return (options: { threadId: number; commentId: number }) => {
        const { threadId, commentId } = options;
        return axios.get<Comment[]>(`/thread/${threadId}/comment/${commentId}/replies`);
    };
}
