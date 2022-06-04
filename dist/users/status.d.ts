import { Axios } from "axios";
export default function status(axios: Axios): () => Promise<import("axios").AxiosResponse<{
    active: boolean;
    id?: number;
    name?: string;
    token?: string;
}, any>>;
