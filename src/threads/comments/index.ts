import { Axios } from "axios";
import getComment from "./comment";
import createComment from "./create";
import images from "./images";
import pin from "./pin";
import replies from "./replies";
import unpin from "./unpin";
import vote from "./vote";

export default function comments(axios: Axios) {
    return {
        get: getComment(axios),
        replies: replies(axios),
        vote: vote(axios),
        create: createComment(axios),
        images: images(axios),
        pin: pin(axios),
        unpin: unpin(axios),
    };
}
