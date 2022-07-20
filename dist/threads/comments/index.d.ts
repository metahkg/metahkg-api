import { Axios } from "axios";
export default function comments(axios: Axios): {
    get: (options: {
        threadId: number;
        commentId: number;
    }) => Promise<import("axios").AxiosResponse<import("../../types/thread/comment").Comment, any>>;
    replies: (options: {
        threadId: number;
        commentId: number;
    }) => Promise<import("axios").AxiosResponse<import("../../types/thread/comment").Comment[], any>>;
    vote: (options: {
        threadId: number;
        commentId: number;
        vote: "U" | "D";
    }) => Promise<import("axios").AxiosResponse<import("../../types/ok").OK, any>>;
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
    }) => Promise<import("axios").AxiosResponse<import("../../types/image").Image[], any>>;
    pin: (options: {
        threadId: number;
        commentId: number;
    }) => Promise<import("axios").AxiosResponse<import("../../types/ok").OK, any>>;
    unpin: (options: {
        threadId: number;
        commentId: number;
    }) => Promise<import("axios").AxiosResponse<import("../../types/ok").OK, any>>;
};
