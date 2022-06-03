import { Axios } from "axios";
import { OK } from "../../types/ok";
export default function vote(axios: Axios): (options: {
    threadId: number;
    commentId: number;
    vote: "U" | "D";
}) => Promise<import("axios").AxiosResponse<OK, any>>;
