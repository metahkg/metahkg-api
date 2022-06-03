import { Axios } from "axios";
import addComment from "./actions/comment";
import create from "./actions/create";
import pin from "./actions/pin";
import unpin from "./actions/unpin";
import vote from "./actions/vote";
import checkExist from "./get/checkExist";
import getComment from "./get/comment/comment";
import replies from "./get/comment/replies";
import images from "./get/images";
import thread from "./get/thread";
import userVotes from "./get/userVotes";

export default function threads(axios: Axios) {
    return {
        checkExist: checkExist(axios),
        images: images(axios),
        thread: thread(axios),
        userVotes: userVotes(axios),
        getComment: getComment(axios),
        replies: replies(axios),
        vote: vote(axios),
        addComment: addComment(axios),
        pin: pin(axios),
        unpin: unpin(axios),
        create: create(axios),
    };
}
