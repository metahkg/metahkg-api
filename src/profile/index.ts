import { Axios } from "axios";
import avatars from "./avatars";
import userProfile from "./userProfile";

export default function profile(axios: Axios) {
    return {
        avatars: avatars(axios),
        userProfile: userProfile(axios),
    };
}
