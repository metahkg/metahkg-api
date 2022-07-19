import { Axios } from "axios";
import login from "./login";
import register from "./register";
import resend from "./resend";
import reset from "./reset";
import verify from "./verify";
import forgot from "./forgot";
import avatars from "./avatars";
import profile from "./profile";

export default function users(axios: Axios) {
    return {
        login: login(axios),
        register: register(axios),
        verify: verify(axios),
        resend: resend(axios),
        forgot: forgot(axios),
        reset: reset(axios),
        avatars: avatars(axios),
        profile: profile(axios)
    };
}
