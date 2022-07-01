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

//Setting map zoom functions

let zoom5 = ()=> map.zoomTo(5)
let zoom10 = () => map.zoomTo(10)
let zoom15 = () => map.zoomTo(15)

//When select options is changed, activate zoom functions depending on user choice

let zoomSelect = document.getElementById('zoom-select')

zoomSelect.addEventListener('change',function(){
    console.log('event change')
    console.log(zoomSelect.value)
    if (zoomSelect.value === '1') {zoom10();}
    if (zoomSelect.value === '2') {zoom5();}
    if (zoomSelect.value === '3') {zoom15();}
});

//When user submits address, use geocode to center map, and add a marker

let addressData = document.getElementById('address-input')
let addressSubmit = document.getElementById('address-submit')

addressSubmit.addEventListener("click", ()=>{
    //Get geocode results
    let userAddress = geocode(addressData.value, mapBoxToken)
        .then(results =>{
            map.setCenter(results)
            new mapboxgl.Marker().setLngLat(results).addTo(map)
        })
})
