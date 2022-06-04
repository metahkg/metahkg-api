import { Axios } from "axios";

export default function (axios: Axios) {
    return (options: {userId: number, nameonly?: boolean})=> {
        const { userId, nameonly } = options;
        return axios.get<string>(`/profile/${userId}${nameonly ? "?nameonly=1" : ""}`);
    }
}
