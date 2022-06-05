import { Axios } from "axios";
export default function profile(axios: Axios): {
    avatars: (options: {
        userId: number;
    }) => Promise<import("axios").AxiosResponse<string, any>>;
    userProfile: (options: {
        userId: number | "self";
        nameonly?: boolean;
    }) => Promise<import("axios").AxiosResponse<string, any>>;
};
