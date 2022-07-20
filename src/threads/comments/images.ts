import { Axios } from "axios";

export default function images(axios: Axios) {
    return (options: { threadId: number; commentId: number }) => {
        const { threadId, commentId } = options;
        return axios.get<string[]>(`/thread/${threadId}/comment/${commentId}/images`);
    };
}
