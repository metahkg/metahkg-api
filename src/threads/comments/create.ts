import { Axios } from "axios";

export default function createComment(axios: Axios) {
    return (options: {
        threadId: number;
        comment: string;
        /** recaptcha token */
        rtoken: string;
        /** the quoted comment id */
        quote?: number;
    }) => {
        const { threadId, comment, rtoken, quote } = options;
        return axios.post<{
            /* new comment id */
            id: number;
        }>(`/thread/${threadId}/comment`, {
            comment,
            rtoken,
            quote,
        });
    };
}
