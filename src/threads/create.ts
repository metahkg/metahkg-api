import { Axios } from "axios";

export default function create(axios: Axios) {
    return (options: {
        comment: string;
        /** recaptcha token */
        rtoken: string;
        title: string;
        /** category id */
        category: number;
    }) => {
        const { comment, rtoken, title, category } = options;
        return axios.post<{
            /** new thread id */
            id: number;
        }>(`/thread/create`, {
            comment,
            rtoken,
            title,
            category,
        });
    };
}
