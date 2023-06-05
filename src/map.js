import {data} from './data.js';

const initMap = () => {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(46.63575312102067, 2.33734448994607),
        zoom: 2.2,  
    });

    const addMarker = (dream) => {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(dream.coordinates.lat, dream.coordinates.long),
            map: map,
            icon: dream.done ? './img/marker_done.png' : './img/marker.png',
        });
        marker.addListener("click", () => {
            map.setZoom(17);
            map.setCenter(marker.getPosition());
            map.setMapTypeId('satellite');
        });
    };
    
    for (let dream of data) {
        addMarker(dream);
    }    
}

const resetMap = document.querySelector('#reset-map');
resetMap.addEventListener('click', initMap);
  
export {initMap};