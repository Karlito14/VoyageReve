import { data } from "./data.js";
const templateItem = document.querySelector('#template-item');

const displayDreams = (dream) => {

    const templateDream = document.importNode(templateItem.content, true);
    const asideDreams = document.querySelector('#dreams-container');

    const h1Dream = templateDream.querySelector('.titre-dream');
    h1Dream.textContent = dream.titre;

    const imgDream = templateDream.querySelector('.img-dream');
    imgDream.setAttribute('src', dream.image);
    imgDream.setAttribute('alt', dream.titre);

    const infoDream = templateDream.querySelector('.info-dream');
    infoDream.setAttribute('href', dream.infos)

    asideDreams.appendChild(templateDream);
};

export {displayDreams};