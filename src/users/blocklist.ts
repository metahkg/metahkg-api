import { Axios } from "axios";

export default function (axios: Axios) {
    () => {
        /** get blocked users */
        return axios.get<number[]>("/users/blocklist");
    };
}
