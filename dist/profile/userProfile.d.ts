import { Axios } from "axios";
export default function (axios: Axios): (options: {
    userId: number | "self";
    nameonly?: boolean;
}) => Promise<import("axios").AxiosResponse<string, any>>;
