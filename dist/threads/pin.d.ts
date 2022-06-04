import { Axios } from "axios";
import { OK } from "../types/ok";
export default function pin(axios: Axios): (options: {
    threadId: number;
    commentId: number;
}) => Promise<import("axios").AxiosResponse<OK, any>>;
