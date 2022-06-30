import { Axios } from "axios";
import { OK } from "../types/ok";

export default function unblock(axios: Axios) {
    return (options: { userId: number }) => {
        const { userId } = options;
        return axios.post<OK>(`/users/unblock`, { userId });
    };
}
