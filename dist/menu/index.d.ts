import { Axios } from "axios";
export default function menu(axios: Axios): {
    threads: (options: {
        threads: number[];
    }) => Promise<import("axios").AxiosResponse<import("../types/thread/thread").Summary[], any>>;
    history: (options: {
        userId: number | "self";
        sort?: 0 | 1 | "Created" | "LastReply";
        page?: number;
        limit?: number;
    }) => Promise<import("axios").AxiosResponse<import("../types/thread/thread").Summary[], any>>;
    /** the main menu (get threads by category) */
    main: (options: import("../types/xor").RequireAtLeastOne<{
        categoryId?: number;
        threadId?: number;
        sort?: 0 | 1 | "Latest" | "Viral";
        page?: number;
        limit?: number;
    }, "categoryId" | "threadId">) => Promise<import("axios").AxiosResponse<import("../types/thread/thread").Summary[], any>>;
    search: (options: {
        page?: number;
        searchQuery: string;
        sort?: 0 | 2 | 1 | "Created" | "LastReply" | "Relevance";
        mode?: 0 | 1 | "Title" | "OP";
        limit?: number;
    }) => Promise<import("axios").AxiosResponse<import("../types/thread/thread").Summary[], any>>;
};
