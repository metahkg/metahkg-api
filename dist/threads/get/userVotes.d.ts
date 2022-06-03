import { Axios } from "axios";
import { UserVotes } from "../../types/thread/userVotes";
export default function userVotes(axios: Axios): (options: {
    threadId: number;
}) => Promise<import("axios").AxiosResponse<UserVotes, any>>;
