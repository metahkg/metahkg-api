import { Axios } from "axios";
import profile from "../profile/userProfile";
import threads from "../threads";
import main from "./main";
import search from "./search";

export default function menu(axios: Axios) {
    return {
        threads: threads(axios),
        profile: profile(axios),
        /** the main menu (get threads by category) */
        main: main(axios),
        search: search(axios)
    };
}
