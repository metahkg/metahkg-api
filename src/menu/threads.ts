import { Axios } from "axios";
import { Summary } from "../types/thread/thread";

export default function (axios: Axios) {
    return (options: {
        /** maximum length 50 */
        threads: number[];
    }) => {
        const { threads } = options;
        return axios.get<Summary[]>(`/menu/threads?threads=${JSON.stringify(threads)}`);
    };
}
