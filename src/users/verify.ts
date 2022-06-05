import { Axios } from "axios";
import { ErrorMsg } from "../threads/error";
import { Token } from "../types/token";

export default function verify(axios: Axios) {
    return (options: { email: string; code: string }) => {
        const { email, code } = options;
        return axios.post<Token, ErrorMsg>(`/users/verify`, { email, code });
    };
}
