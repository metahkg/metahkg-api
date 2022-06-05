import { Axios } from "axios";
import { OK } from "../types/ok";

export default function avatar(axios: Axios) {
    return (options: { avatar: File }) => {
        const { avatar } = options;

        const formData = new FormData();
        formData.append("avatar", avatar);

        return axios.post<OK>("/users/avatar", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
    };
}
