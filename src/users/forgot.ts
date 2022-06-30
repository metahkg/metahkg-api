import { Axios } from "axios";
import { OK } from "../types/ok";

/** send a email to the user in which they can find a link for resetting their password */
export default function reset(axios: Axios) {
    return (options: { email: string }) => {
        const { email } = options;
        return axios.post<OK>(`/users/forgot`, { email });
    };
}
