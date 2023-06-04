import { initMap } from "./map.js";
import { displayDreams } from "./dream.js";
import { data } from "./data.js";

const init = () => {
    initMap();
    for(let dream of data) {
        displayDreams(dream);
    }
};

window.init = init;