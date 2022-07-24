import { Axios } from "axios";
export default function createComment(axios: Axios): (options: {
    threadId: number;
    comment: string;
    /** recaptcha token */
    rtoken: string;
    /** the quoted comment id */
    quote?: number;
}) => Promise<import("axios").AxiosResponse<{
    id: number;
}, any>>;
