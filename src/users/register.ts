import { Axios } from "axios";
import { OK } from "../types/ok";
import { userSex } from "../types/user";

export default function register(axios: Axios) {
    return (options: {
        username: string;
        email: string;
        password: string;
        rtoken: string;
        sex: userSex;
        invitecode?: string;
    }) => {
        const { username: name, email, password: pwd, rtoken, sex, invitecode } = options;
        return axios.post<OK>(`/users/register`, {
            name,
            email,
            pwd,
            rtoken,
            sex,
            invitecode,
        });
    };
}
