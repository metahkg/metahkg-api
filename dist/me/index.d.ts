import { Axios } from "axios";
export default function users(axios: Axios): {
    uploadAvatar: (options: {
        avatar: File;
    }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
    rename: (options: {
        name: string;
    }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK & import("../types/token").Token, any>>;
    status: () => Promise<import("axios").AxiosResponse<{
        active: boolean;
        id?: number;
        name?: string;
    }, any>>;
    block: (options: {
        userId: number;
    }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
    unblock: (options: {
        userId: number;
    }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
    blocklist: () => Promise<import("axios").AxiosResponse<import("../types/user").User[], any>>;
    votes: (options: {
        threadId: number;
    }) => Promise<import("axios").AxiosResponse<import("../types/me/votes").votes, any>>;
};
