import { Axios } from "axios";
import { Comment } from "../../types/thread/comment";
export default function replies(axios: Axios): (options: {
    threadId: number;
    commentId: number;
}) => Promise<import("axios").AxiosResponse<Comment[], any>>;
