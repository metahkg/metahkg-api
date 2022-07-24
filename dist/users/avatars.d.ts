import { Axios } from "axios";
export default function (axios: Axios): (options: {
    userId: number;
}) => Promise<import("axios").AxiosResponse<string, any>>;
