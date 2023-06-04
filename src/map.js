import {data} from './data.js';
let map;

const initMap = () => {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(46.63575312102067, 2.33734448994607),
        zoom: 2.2,  
    });

    const addMarker = (dream) => {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(dream.coordinates.lat, dream.coordinates.long),
            map: map,
            icon: dream.done ? './img/marker_done.png' : './img/marker.png',
        });
    };
    
    for (let dream of data) {
        addMarker(dream);
    }    
}
  
export {initMap};