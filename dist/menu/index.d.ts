import { Axios } from "axios";
export default function menu(axios: Axios): {
    threads: {
        checkExist: (options: {
            threadId: number;
        }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
        images: (options: {
            threadId: number;
            commentId?: number;
        }) => Promise<import("axios").AxiosResponse<import("../types/images").Images, any>>;
        get: (options: {
            threadId: number;
            page?: number;
            start?: number;
            end?: number;
            sort?: "vote";
        }) => Promise<import("axios").AxiosResponse<import("../types/thread/thread").Thread, any>>;
        userVotes: (options: {
            threadId: number;
        }) => Promise<import("axios").AxiosResponse<import("../types/thread/userVotes").UserVotes, any>>;
        pin: (options: {
            threadId: number;
            commentId: number;
        }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
        unpin: (options: {
            threadId: number;
        }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
        create: (options: {
            comment: string;
            rtoken: string;
            title: string;
            category: number;
        }) => Promise<import("axios").AxiosResponse<{
            id: number;
        }, any>>;
        comments: {
            get: (options: {
                threadId: number;
                commentId: number;
            }) => Promise<import("axios").AxiosResponse<import("../types/thread/comment").Comment, any>>;
            replies: (options: {
                threadId: number;
                commentId: number;
            }) => Promise<import("axios").AxiosResponse<Comment[], any>>;
            vote: (options: {
                threadId: number;
                commentId: number;
                vote: "U" | "D";
            }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
            add: (options: {
                threadId: number;
                comment: string;
                rtoken: string;
                quote?: number;
            }) => Promise<import("axios").AxiosResponse<{
                id: number;
            }, any>>;
        };
    };
    profile: (options: {
        userId: number;
        nameonly?: boolean;
    }) => Promise<import("axios").AxiosResponse<string, any>>;
    /** the main menu (get threads by category) */
    main: (options: {
        categoryId: number;
        sort?: "Latest" | "Viral";
        page?: number;
    }) => Promise<import("axios").AxiosResponse<import("../types/thread/thread").Summary[], any>>;
    search: (options: {
        page?: number;
        searchQuery: string;
        sort?: "Relevence" | "Topic" | "LastReply";
        /** the main menu (get threads by category) */
        mode?: "Title" | "OP";
    }) => Promise<import("axios").AxiosResponse<import("../types/thread/thread").Summary[], any>>;
};
