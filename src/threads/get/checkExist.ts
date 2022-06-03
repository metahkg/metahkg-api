import { Axios } from "axios";
import objToQuery from "../../lib/objToQuery";
import { OK } from "../../types/ok";

export default function checkExist(axios: Axios) {
    return (options: { threadId: number }) => {
        const { threadId } = options;
        const query = objToQuery({ id: threadId });
        return axios.get<OK>(`/thread/check${query ? "?" + query : ""}`);
    };
}
