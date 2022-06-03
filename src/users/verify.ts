import { Axios } from "axios";
import { Token } from "../types/token";

export default function verify(axios: Axios) {
    return (options: { email: string; code: string }) => {
        const { email, code } = options;
        return axios.post<Token>(`/users/verify`, { email, code });
    };
}
