import { Axios } from "axios";
import { Category } from "../types/category";

export default function info(axios: Axios) {
    return (
        // must provide either category id or thread id
        option: { categoryId?: number; threadId?: number }
    ) => {
        return axios.get<Category>(
            `/category/${option.categoryId || `bytid${option.threadId}`}`
        );
    };
}
