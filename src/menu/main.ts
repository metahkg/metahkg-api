import { Axios } from "axios";
import objToQuery from "../lib/objToQuery";
import { Summary } from "../types/thread/thread";

export default function (axios: Axios) {
    return (options: {
        categoryId: number;
        sort?: "Latest" | "Viral";
        page?: number;
    }) => {
        const { categoryId, sort, page } = options;
        const query = objToQuery({ sort: sort && sort === "Latest" ? 0 : 1, page });
        return axios.get<Summary[]>(`/menu/${categoryId}${query ? `?${query}` : ""}`);
    };
}
