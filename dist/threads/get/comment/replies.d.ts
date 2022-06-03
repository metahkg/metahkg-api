import { Axios } from "axios";
export default function replies(axios: Axios): (options: {
    threadId: number;
    commentId: number;
}) => Promise<import("axios").AxiosResponse<Comment[], any>>;
