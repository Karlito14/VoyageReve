import { data } from "./data.js";
import { initMap } from "./map.js"; 

const templateItem = document.querySelector('#template-item');
const asideDreams = document.querySelector('#dreams-container');

const displayDreams = (dream) => {

    const templateDream = templateItem.content.cloneNode(true);

    const h1Dream = templateDream.querySelector('.titre-dream');
    h1Dream.textContent = dream.titre;

    const imgDream = templateDream.querySelector('.img-dream');
    imgDream.setAttribute('src', dream.image);
    imgDream.setAttribute('alt', dream.titre);

    const infoDream = templateDream.querySelector('.info-dream');
    infoDream.setAttribute('href', dream.infos);

    const btnDone = templateDream.querySelector('.btn-done');
    btnDone.setAttribute('data-id', dream.id)

    if(dream.done) {
        btnDone.classList.add('btn-secondary');
        btnDone.textContent = "Je veux le refaire !"
    } else {
        btnDone.classList.add('btn-danger');
        btnDone.textContent = "Je me lance !"
    }

    const allBtnDone = templateDream.querySelectorAll('.btn-done');
    allBtnDone.forEach(element => {
        dreamDone(element);
    });

    asideDreams.appendChild(templateDream);
};

const toogleDreamDone = (id, element) => {
    const dream = data.filter(item => +item.id === +id)[0];
    dream.done = !dream.done;
    if(dream.done) {
        element.classList.replace('btn-danger','btn-secondary');
        element.textContent = "Je veux le refaire !"
    } else {
        element.classList.replace('btn-secondary','btn-danger');
        element.textContent = "Je me lance !"
    }
}

const dreamDone = (element) => {
    const idElement = element.getAttribute('data-id');
    element.addEventListener('click', (event) => {
        toogleDreamDone(idElement, element);
        initMap();
    });
}

export {displayDreams};