import { Axios } from "axios";
import { OK } from "../types/ok";

export default function block(axios: Axios) {
    return (options: { userId: number }) => {
        const { userId } = options;
        return axios.post<OK>(`/users/block`, { userId });
    };
}
