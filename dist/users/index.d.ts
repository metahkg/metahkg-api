import { Axios } from "axios";
export default function users(axios: Axios): {
    uploadAvatar: (options: {
        avatar: File;
    }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
    rename: (options: {
        name: string;
    }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK & import("../types/token").Token, any>>;
    login: (options: {
        userNameOrEmail: string;
        password: string;
    }) => Promise<import("axios").AxiosResponse<import("../types/token").Token, any>>;
    register: (options: {
        username: string;
        email: string;
        password: string;
        rtoken: string;
        sex: import("../types/user").userSex;
        invitecode?: string;
    }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
    verify: (options: {
        email: string;
        code: string;
    }) => Promise<import("axios").AxiosResponse<import("../types/token").Token, any>>;
    resend: (options: {
        email: string;
        rtoken: string;
    }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
    forgot: (options: {
        email: string;
    }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
    reset: (options: {
        email: string;
        verificationToken: string;
        newPassword: string;
    }) => Promise<import("axios").AxiosResponse<import("../types/token").Token, any>>;
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
    blocklist: void;
};
