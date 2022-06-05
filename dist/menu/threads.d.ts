import { Axios } from "axios";
import { Summary } from "../types/thread/thread";
export default function (axios: Axios): (options: {
    /** maximum length 25 */
    threads: number[];
}) => Promise<import("axios").AxiosResponse<Summary[], any>>;
