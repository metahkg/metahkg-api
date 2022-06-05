import { Axios } from "axios";
import objToQuery from "../lib/objToQuery";
import { Summary } from "../types/thread/thread";

export default function (axios: Axios) {
    return (options: {
        categoryId: number;
        sort?: "Latest" | "Viral" | 0 | 1;
        page?: number;
    }) => {
        const { categoryId, sort, page } = options;
        const query = objToQuery({
            sort: sort && { Latest: 0, Viral: 1, 0: 0, 1: 1 }[sort],
            page,
        });
        return axios.get<Summary[]>(`/menu/${categoryId}${query ? `?${query}` : ""}`);
    };
}
