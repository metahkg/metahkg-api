import { Axios } from "axios";
export default function unblock(axios: Axios): (options: {
    userId: number;
}) => Promise<import("axios").AxiosResponse<{
    blocked: number[];
}, any>>;
