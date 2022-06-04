import { Axios } from "axios";
export default function (axios: Axios): (options: {
    userId: number;
    nameonly?: boolean;
}) => Promise<import("axios").AxiosResponse<string, any>>;
