import { Axios } from "axios";

export default function unblock(axios: Axios) {
    return (options: { userId: number }) => {
        const { userId } = options;
        return axios.post<{ blocked: number[] }>(`/users/unblock`, { userId });
    };
}
