import { Axios } from "axios";
import { OK } from "../types/ok";
export default function resend(axios: Axios): (options: {
    email: string;
    /** recaptcha token */
    rtoken: string;
}) => Promise<import("axios").AxiosResponse<OK, any>>;
