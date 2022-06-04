import { Axios } from "axios";
import { OK } from "../types/ok";
export default function unpin(axios: Axios): (options: {
    threadId: number;
}) => Promise<import("axios").AxiosResponse<OK, any>>;
