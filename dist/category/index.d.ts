import { Axios } from "axios";
export default function category(axios: Axios): {
    info: (options: import("../types/xor").RequireAtLeastOne<{
        categoryId?: number;
        threadId?: number;
    }, "categoryId" | "threadId">) => Promise<import("axios").AxiosResponse<import("../types/category").Category, any>>;
    categories: () => Promise<import("axios").AxiosResponse<import("../types/category").Category[], any>>;
};
