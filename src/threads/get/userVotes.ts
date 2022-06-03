import { Axios } from "axios";
import { UserVotes } from "../../types/thread/userVotes";

export default function userVotes(axios: Axios) {
    return (options: { threadId: number }) => {
        const { threadId } = options;
        return axios.get<UserVotes>(`/thread/${threadId}/uservotes`);
    };
}
