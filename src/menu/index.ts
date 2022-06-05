import { Axios } from "axios";
import history from "./history";
import threads from "./threads";
import main from "./main";
import search from "./search";

export default function menu(axios: Axios) {
    return {
        threads: threads(axios),
        profile: history(axios),
        /** the main menu (get threads by category) */
        main: main(axios),
        search: search(axios),
    };
}
