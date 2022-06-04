import { Axios } from "axios";
export default function create(axios: Axios): (options: {
    comment: string;
    /** recaptcha token */
    rtoken: string;
    title: string;
    /** category id */
    category: number;
}) => Promise<import("axios").AxiosResponse<{
    /** new thread id */
    id: number;
}, any>>;
