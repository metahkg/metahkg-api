import { Axios } from "axios";
import objToQuery from "../lib/objToQuery";
import { Summary } from "../types/thread/thread";
import { RequireAtLeastOne } from "../types/xor";

export default function (axios: Axios) {
    return (
        options: RequireAtLeastOne<
            {
                categoryId?: number;
                threadId?: number;
                sort?: "Latest" | "Viral" | 0 | 1;
                page?: number;
                limit?: number;
            },
            "categoryId" | "threadId"
        >
    ) => {
        const { categoryId, threadId, sort, page, limit } = options;
        const query = objToQuery({
            sort: sort && { Latest: 0, Viral: 1, 0: 0, 1: 1 }[sort],
            page,
            limit,
        });
        return axios.get<Summary[]>(
            `/menu/${categoryId || `bytid${threadId}`}${query ? `?${query}` : ""}`
        );
    };
}
