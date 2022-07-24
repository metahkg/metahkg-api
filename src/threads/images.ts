import { Axios } from "axios";
import { Image } from "../types/image";

export default function images(axios: Axios) {
    return (options: { threadId: number }) => {
        const { threadId } = options;
        return axios.get<Image[]>(`/thread/${threadId}/images`);
    };
}
