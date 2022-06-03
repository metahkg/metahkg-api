import { Axios } from "axios";
export default function block(axios: Axios): (options: {
    userId: number;
}) => Promise<import("axios").AxiosResponse<{
    blocked: number[];
}, any>>;
