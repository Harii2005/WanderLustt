
mapboxgl.accessToken = mapToken ;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [77.2090, 28.6139],//here fist longitute and then latitude
    // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});


// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
    .setLngLat([12.554729, 55.70651])
    .addTo(map);