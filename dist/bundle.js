/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   data: () => (/* binding */ data)
/* harmony export */ });
const data = [
    {
        id: 1,
        titre: 'Visiter les pyramides de Gizeh',
        image: '../img/img_pyramides.jpg',
        infos: 'https://www.pyramid-of-giza.com/fr/visite-pyramide-gizeh/',
        done: false,
        coordinates : {lat: 29.980493, long: 31.132496}
    },
    {
        id: 2,
        titre: 'Safari au Kenya',
        image: '../img/img_kenya.jpg',
        infos: 'https://www.voyageavecnous.fr/safari-au-kenya/',
        done: false,
        coordinates : {lat: -1.239300, long: 36.797410}, 
    },
    {
        id: 3,
        titre: 'Bronzer aux Maldives',
        image: '../img/img_maldives.jpg',
        infos: 'https://www.partir.com/Maldives/',
        done: false,
        coordinates : {lat: -0.6306308469476507, long: 73.09955218689714},  
    },
    {
        id: 4,
        titre: 'Faire le pélerinage à la Mecque',
        image: '../img/img_mekka.jpg',
        infos: 'https://www.lepelerinage.com/hajj-hajj.html',
        done: false,
        coordinates : {lat: 21.433378181363306, long: 39.825929541712654},  
    }
]



/***/ }),

/***/ "./src/dream.js":
/*!**********************!*\
  !*** ./src/dream.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayDreams: () => (/* binding */ displayDreams)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");

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



/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initMap: () => (/* binding */ initMap)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");

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
    
    for (let dream of _data_js__WEBPACK_IMPORTED_MODULE_0__.data) {
        addMarker(dream);
    }    
}
  


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./src/map.js");
/* harmony import */ var _dream_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dream.js */ "./src/dream.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./src/data.js");




const init = () => {
    (0,_map_js__WEBPACK_IMPORTED_MODULE_0__.initMap)();
    for(let dream of _data_js__WEBPACK_IMPORTED_MODULE_2__.data) {
        (0,_dream_js__WEBPACK_IMPORTED_MODULE_1__.displayDreams)(dream);
    }
};

window.init = init;
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map