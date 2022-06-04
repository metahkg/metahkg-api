import { Axios } from "axios";
import { Category } from "../types/category";
export default function categories(axios: Axios): () => Promise<import("axios").AxiosResponse<Category[], any>>;
