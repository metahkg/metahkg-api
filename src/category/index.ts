import { Axios } from "axios";
import categories from "./categories";
import info from "./info";

export default function category (axios: Axios) {
    return {
        info: info(axios),
        categories: categories(axios)
    };
}
