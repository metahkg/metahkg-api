import { Axios } from "axios";
import { Category } from "../types/category";
export default function info(axios: Axios): (option: {
    categoryId?: number;
    threadId?: number;
}) => Promise<import("axios").AxiosResponse<Category, any>>;
