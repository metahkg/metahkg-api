import { Axios } from "axios";
import { Category } from "../types/category";
import { RequireAtLeastOne } from "../types/xor";
export default function info(axios: Axios): (options: RequireAtLeastOne<{
    categoryId?: number;
    threadId?: number;
}, "categoryId" | "threadId">) => Promise<import("axios").AxiosResponse<Category, any>>;
