import { Axios } from "axios";
export default function status(axios: Axios): () => Promise<import("axios").AxiosResponse<{
    action: boolean;
    id?: number;
    name?: string;
    token?: string;
}, any>>;
