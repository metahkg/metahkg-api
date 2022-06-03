import { Axios } from "axios";
import { OK } from "../types/ok";
import { Token } from "../types/token";
import { userSex } from "../types/user";

export default function editprofile(axios: Axios) {
    return (options: { name?: string; sex?: userSex }) => {
        const { name, sex } = options;
        return axios.put<OK & Token>("/users/editprofile", {
            name,
            sex,
        });
    };
}
