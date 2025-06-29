
mapboxgl.accessToken = mapToken ;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: coordinates,//here fist longitute and then latitude
    // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});


// console.log(coordinates);

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);