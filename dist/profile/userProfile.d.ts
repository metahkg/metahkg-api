import { Axios } from "axios";
import { Profile } from "../types/user";
export default function (axios: Axios): (options: {
    userId: number | "self";
    nameonly?: boolean;
}) => Promise<import("axios").AxiosResponse<Profile, any>>;
