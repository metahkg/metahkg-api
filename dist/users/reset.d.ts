import { Axios } from "axios";
import { Token } from "../types/token";
export default function reset(axios: Axios): (options: {
    email: string;
    /** acquire the verification token through forgot (will be sent to user's email address) */
    verificationToken: string;
    newPassword: string;
}) => Promise<import("axios").AxiosResponse<Token, any>>;
