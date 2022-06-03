import { Axios } from "axios";
import { OK } from "../types/ok";
import { Token } from "../types/token";

export default function reset(axios: Axios) {
    return (options: {
        email: string;
        verificationToken?: string;
        newPassword?: string;
    }) => {
        const { email, verificationToken: token, newPassword: pwd } = options;
        return axios.post<OK | Token>(`/users/reset`, {
            email,
            token,
            pwd,
        });
    };
}
