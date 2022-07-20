import { Axios } from "axios";
import createComment from "./comments/create";
import create from "./create";
import vote from "./comments/vote";
import checkExist from "./checkExist";
import getComment from "./comments/comment";
import replies from "./comments/replies";
import images from "./images";
import thread from "./thread";
import comments from "./comments";

export default function threads(axios: Axios) {
    return {
        checkExist: checkExist(axios),
        images: images(axios),
        get: thread(axios),
        create: create(axios),
        comments: comments(axios),
    };
}
