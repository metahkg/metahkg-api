import { Axios } from "axios";
import { Profile } from "../types/user";

export default function (axios: Axios) {
    return (options: { userId: number | "self"; nameonly?: boolean }) => {
        const { userId, nameonly } = options;
        return axios.get<Profile>(`/profile/${userId}${nameonly ? "?nameonly=1" : ""}`);
    };
}
