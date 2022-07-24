import { Axios } from "axios";
import { Summary } from "../types/thread/thread";
import { RequireAtLeastOne } from "../types/xor";
export default function (axios: Axios): (options: RequireAtLeastOne<{
    categoryId?: number;
    threadId?: number;
    sort?: "Latest" | "Viral" | 0 | 1;
    page?: number;
    limit?: number;
}, "categoryId" | "threadId">) => Promise<import("axios").AxiosResponse<Summary[], any>>;
