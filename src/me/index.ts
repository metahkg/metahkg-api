import { Axios } from "axios";
import avatar from "./avatar";
import block from "./block";
import rename from "./rename";
import status from "./status";
import unblock from "./unblock";
import blocklist from "./blocked";
import votes from "./votes"

export default function users(axios: Axios) {
    return {
        uploadAvatar: avatar(axios),
        rename: rename(axios),
        status: status(axios),
        block: block(axios),
        unblock: unblock(axios),
        blocklist: blocklist(axios),
        votes: votes(axios)
    };
}
