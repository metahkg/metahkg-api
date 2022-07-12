import { Axios } from "axios";
import { User } from "../types/user";
export default function (axios: Axios): () => Promise<import("axios").AxiosResponse<User[], any>>;
