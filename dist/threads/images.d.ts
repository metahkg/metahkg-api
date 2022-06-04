import { Axios } from "axios";
import { Images } from "../types/images";
export default function images(axios: Axios): (options: {
    threadId: number;
    commentId?: number;
}) => Promise<import("axios").AxiosResponse<Images, any>>;
