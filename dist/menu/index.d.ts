import { Axios } from "axios";
export default function menu(axios: Axios): {
    threads: (options: {
        threads: number[];
    }) => Promise<import("axios").AxiosResponse<import("../types/thread/thread").Summary[], any>>;
    history: (options: {
        userId: number | "self";
        sort?: 0 | 1 | "Topic" | "LastReply";
        page?: number;
    }) => Promise<import("axios").AxiosResponse<import("../types/thread/thread").Summary[], any>>;
    /** the main menu (get threads by category) */
    main: (options: {
        categoryId: string | number;
        sort?: 0 | 1 | "Latest" | "Viral";
        page?: number;
    }) => Promise<import("axios").AxiosResponse<import("../types/thread/thread").Summary[], any>>;
    search: (options: {
        page?: number;
        searchQuery: string;
        sort?: 0 | 2 | 1 | "Topic" | "LastReply" | "Relevance";
        mode?: 0 | 1 | "Title" | "OP";
    }) => Promise<import("axios").AxiosResponse<import("../types/thread/thread").Summary[], any>>;
};
