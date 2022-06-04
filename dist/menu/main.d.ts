import { Axios } from "axios";
import { Summary } from "../types/thread/thread";
export default function (axios: Axios): (options: {
    categoryId: number;
    sort?: "Latest" | "Viral";
    page?: number;
}) => Promise<import("axios").AxiosResponse<Summary[], any>>;
