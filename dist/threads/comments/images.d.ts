import { Axios } from "axios";
export default function images(axios: Axios): (options: {
    threadId: number;
    commentId: number;
}) => Promise<import("axios").AxiosResponse<string[], any>>;
