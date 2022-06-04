import { Axios } from "axios";

export default function (axios: Axios) {
    /** returns a png image */
    return (options: { userId: number }) => {
        const { userId } = options;
        return axios.get<string>(`/profile/avatars/${userId}`);
    };
}
