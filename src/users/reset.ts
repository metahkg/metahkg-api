import { Axios } from "axios";
import { Token } from "../types/token";

export default function reset(axios: Axios) {
    return (options: {
        email: string;
        /** acquire the verification token through forgot (will be sent to user's email address) */
        verificationToken: string;
        newPassword: string;
    }) => {
        const { email, verificationToken: token, newPassword: pwd } = options;
        return axios.post<Token>(`/users/reset`, {
            email,
            token,
            pwd,
        });
    };
}
