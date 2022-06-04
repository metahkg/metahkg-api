import { Axios } from "axios";
import avatar from "./avatar";
import block from "./block";
import editprofile from "./editprofile";
import login from "./login";
import register from "./register";
import resend from "./resend";
import reset from "./reset";
import status from "./status";
import unblock from "./unblock";
import verify from "./verify";

export default function users(axios: Axios) {
    return {
        uploadAvatar: avatar(axios),
        block: block(axios),
        editprofile: editprofile(axios),
        login: login(axios),
        register: register(axios),
        resend: resend(axios),
        reset: reset(axios),
        status: status(axios),
        unblock: unblock(axios),
        verify: verify(axios),
    };
}
