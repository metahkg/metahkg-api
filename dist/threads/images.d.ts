import { Axios } from "axios";
import { Image } from "../types/image";
export default function images(axios: Axios): (options: {
    threadId: number;
}) => Promise<import("axios").AxiosResponse<Image[], any>>;
