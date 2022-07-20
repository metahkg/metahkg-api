import { Axios } from "axios";
import { Image } from "../../types/image";

export default function images(axios: Axios) {
    return (options: { threadId: number; commentId: number }) => {
        const { threadId, commentId } = options;
        return axios.get<Image[]>(`/thread/${threadId}/comment/${commentId}/images`);
    };
}
