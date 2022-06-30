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

let xianNoodles = {
    lngLat : [-122.313117,47.668191],
    name : 'Xi\'an Noodles',
    description : 'One of a kind noodles!'
}

let ivarsSalmon = {
    lngLat : [-122.323832, 47.653525],
    name: 'Ivar\'s Salmon House',
    description: 'The best fish and chips in town!'
}

let dicksDriveIn = {
    lngLat : [-122.321076, 47.619327],
    name: 'Dick\'s Drive-In',
    description: 'A Seattle classic, cheapest burgers with the best taste. Everyone loves a bag of Dick\'s!'
}

let allMarkers = [xianNoodles, ivarsSalmon, dicksDriveIn]

allMarkers.forEach( (current)=>{
    let popup = new mapboxgl.Popup().setHTML('<h1>' + current.name + '</h1>' + '<p>' + current.description + '</p>')
    new mapboxgl.Marker().setLngLat(current.lngLat).addTo(map).setPopup(popup)
})