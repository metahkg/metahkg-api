import { Axios } from "axios";
import { OK } from "../types/ok";
export default function avatar(axios: Axios): (options: {
    avatar: File;
}) => Promise<import("axios").AxiosResponse<OK, any>>;
