import { Axios } from "axios";
import { votes } from "../types/me/votes";

export default function votes(axios: Axios) {
    return (options: { threadId: number }) => {
        const { threadId } = options;
        return axios.get<votes>(`/me/votes/${threadId}`);
    };
}
