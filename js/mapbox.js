'use strict'
// Setting token
mapboxgl.accessToken = mapBoxToken;

//Creating map, attaching it to div with map ID
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-122.330062, 47.603832], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

//Captures where user double clicks, still zooms..
map.on('dblclick', (e) => {
    console.log(`User clicked at ${e.lngLat}`)
})

let favRestaraunt = new mapboxgl.Marker().setLngLat([-122.313117,47.668191]).addTo(map)