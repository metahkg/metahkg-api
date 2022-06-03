import { Axios } from "axios";
import { OK } from "../types/ok";

export default function resend(axios: Axios) {
    return (options: {
        email: string;
        /** recaptcha token */
        rtoken: string;
    }) => {
        const { email, rtoken } = options;
        return axios.post<OK>(`/users/resend`, { email, rtoken });
    };
}
