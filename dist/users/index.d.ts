import { Axios } from "axios";
export default function users(axios: Axios): {
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
        rtoken: string;
    }) => Promise<import("axios").AxiosResponse<import("../types/ok").OK, any>>;
    reset: (options: {
        email: string;
        verificationToken: string;
        newPassword: string;
    }) => Promise<import("axios").AxiosResponse<import("../types/token").Token, any>>;
    avatars: (options: {
        userId: number;
    }) => Promise<import("axios").AxiosResponse<string, any>>;
    profile: (options: {
        userId: number;
        nameonly?: boolean;
    }) => Promise<import("axios").AxiosResponse<import("../types/user").Profile, any>>;
};
