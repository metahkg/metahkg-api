import { Axios } from "axios";

export default function block(axios: Axios) {
    return (options: { userId: number }) => {
        const { userId } = options;
        return axios.post<{ blocked: number[] }>(`/users/block`, { userId });
    };
}
