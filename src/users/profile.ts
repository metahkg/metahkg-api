import { Axios } from "axios";
import { Profile } from "../types/user";

export default function (axios: Axios) {
    return (options: { userId: number; nameonly?: boolean }) => {
        const { userId, nameonly } = options;
        return axios.get<Profile>(`/users/profile/${userId}${nameonly ? "?nameonly=1" : ""}`);
    };
}
