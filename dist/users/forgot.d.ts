import { Axios } from "axios";
import { OK } from "../types/ok";
/** send a email to the user in which they can find a link for resetting their password */
export default function reset(axios: Axios): (options: {
    email: string;
    rtoken: string;
}) => Promise<import("axios").AxiosResponse<OK, any>>;
