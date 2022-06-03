import { Axios } from "axios";
import { OK } from "../../types/ok";

export default function unpin(axios: Axios) {
    return (options: { threadId: number }) => {
        const { threadId } = options;
        return axios.put<OK>(`/thread/${threadId}/unpin`);
    };
}
