import { Axios } from "axios";
import { Category } from "../types/category";

export default function categories(axios: Axios) {
    return () => {
        return axios.get<Category[]>("/category");
    };
}
