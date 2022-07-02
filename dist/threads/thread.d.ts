import { Axios } from "axios";
import { Thread } from "../types/thread/thread";
export default function thread(axios: Axios): (options: {
    threadId: number;
    page?: number;
    start?: number;
    end?: number;
    sort?: "score" | "time" | "latest";
}) => Promise<import("axios").AxiosResponse<Thread, any>>;
