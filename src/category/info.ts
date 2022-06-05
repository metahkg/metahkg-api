import { Axios } from "axios";
import { Category } from "../types/category";
import { RequireAtLeastOne } from "../types/xor";

export default function info(axios: Axios) {
    return (
        // must provide either category id or thread id
        options: RequireAtLeastOne<
            { categoryId?: number; threadId?: number },
            "categoryId" | "threadId"
        >
    ) => {
        const { categoryId, threadId } = options;
        return axios.get<Category>(`/category/${categoryId || `bytid${threadId}`}`);
    };
}
