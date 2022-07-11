import { Axios } from "axios";
import { User } from "../types/user";

export default function (axios: Axios) {
    () => {
        /** get blocked users */
        return axios.get<User[]>("/users/blocklist");
    };
}
