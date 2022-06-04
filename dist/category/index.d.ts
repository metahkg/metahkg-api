import { Axios } from "axios";
export default function category(axios: Axios): {
    info: (option: {
        categoryId?: number;
        threadId?: number;
    }) => Promise<import("axios").AxiosResponse<import("../types/category").Category, any>>;
    categories: () => Promise<import("axios").AxiosResponse<import("../types/category").Category[], any>>;
};
