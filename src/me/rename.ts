import { Axios } from "axios";
import { OK } from "../types/ok";
import { Token } from "../types/token";

export default function rename(axios: Axios) {
    return (options: { name: string }) => {
        const { name } = options;
        return axios.put<OK & Token>("/me/rename", {
            name,
        });
    };
}
