import { Axios } from "axios";
export default function threads(axios: Axios): {
    checkExist: (options: {
        threadId: number;
    }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
    images: (options: {
        threadId: number;
    }) => Promise<import("axios").AxiosResponse<import("../types/image").Image[], any>>;
    get: (options: {
        threadId: number;
        page?: number;
        start?: number;
        end?: number;
        sort?: "time" | "score" | "latest";
        limit?: number;
    }) => Promise<import("axios").AxiosResponse<import("../types/thread/thread").Thread, any>>;
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
        }) => Promise<import("axios").AxiosResponse<import("../types/thread/comment").Comment[], any>>;
        vote: (options: {
            threadId: number;
            commentId: number;
            vote: "U" | "D";
        }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
        create: (options: {
            threadId: number;
            comment: string;
            rtoken: string;
            quote?: number;
        }) => Promise<import("axios").AxiosResponse<{
            id: number;
        }, any>>;
        images: (options: {
            threadId: number;
            commentId: number;
        }) => Promise<import("axios").AxiosResponse<string[], any>>;
        pin: (options: {
            threadId: number;
            commentId: number;
        }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
        unpin: (options: {
            threadId: number;
            commentId: number;
        }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
    };
};
