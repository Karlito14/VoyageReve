let map;

const initMap = () => {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(46.63575312102067, 2.33734448994607),
        zoom: 2.2,
        
    });

    const features = [
        {
          position: new google.maps.LatLng(29.980493, 31.132496),
        },
        {
          position: new google.maps.LatLng(-1.239300, 36.797410),
        },
        {
          position: new google.maps.LatLng(-0.6306308469476507, 73.09955218689714),
        },
        {
            position: new google.maps.LatLng(21.433378181363306, 39.825929541712654),
        }
    ]
    
    for (let i = 0; i < features.length; i++) {
        const marker = new google.maps.Marker({
          position: features[i].position,
          map: map,
          icon: '../img/marker.png'
        });
      }
    
}
  
export {initMap};