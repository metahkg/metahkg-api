import { Axios } from "axios";
import addComment from "./comments/addComment";
import create from "./create";
import pin from "./pin";
import unpin from "./unpin";
import vote from "./comments/vote";
import checkExist from "./checkExist";
import getComment from "./comments/getComment";
import replies from "./comments/replies";
import images from "./images";
import thread from "./thread";
import userVotes from "./userVotes";

export default function threads(axios: Axios) {
    return {
        checkExist: checkExist(axios),
        images: images(axios),
        get: thread(axios),
        userVotes: userVotes(axios),
        pin: pin(axios),
        unpin: unpin(axios),
        create: create(axios),
        comments: {
            get: getComment(axios),
            replies: replies(axios),
            vote: vote(axios),
            add: addComment(axios),
        },
    };
}
