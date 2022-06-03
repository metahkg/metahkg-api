import { Axios } from "axios";
export default function avatar(axios: Axios): (options: {
    avatar: File;
}) => Promise<import("axios").AxiosResponse<any, any>>;
