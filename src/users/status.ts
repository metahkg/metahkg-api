import { Axios } from "axios";

export default function status(axios: Axios) {
    return () => {
        return axios.get<{
            active: boolean;
            id?: number;
            name?: string;
        }>("/users/status");
    };
}
