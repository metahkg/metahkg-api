import { Axios } from "axios";
import { votes } from "../types/me/votes";
export default function votes(axios: Axios): (options: {
    threadId: number;
}) => Promise<import("axios").AxiosResponse<votes, any>>;
