import { Axios } from "axios";
import { ErrorMsg } from "../threads/error";
export default function verify(axios: Axios): (options: {
    email: string;
    code: string;
}) => Promise<ErrorMsg>;
