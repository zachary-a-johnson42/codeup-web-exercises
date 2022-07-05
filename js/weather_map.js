'use strict'
//setting token
mapboxgl.accessToken = mapBoxToken;

//setting lng & lat for changing

let long;
let lati;

//Creating map, attaching it to div with map ID
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-122.330062, 47.603832], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

map.on('dblclick', (e) => {
    let location = e.lngLat
    long = location.lng;
    lati = location.lat;
    getWeather(lati, long)
})

let weatherDiv = document.getElementById('weather-cards');





function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly&appid=${weatherToken}`
    ).then(res => res.json())
        .then(data => {
            console.log(data)
            //Need to use time to get dates.
            let today = new Date();
            console.log(today)
            let html = '<div class="weather-card">'
            html += '<div><p>' + today + '</p></div>'
            html += '<div><h1> Currently: ' +  data.current.temp + '</h1></div>'
            html += '<div><p> Expected Forecast: ' + data.current.weather[0].main + '</p></div>'
            html += '</div>'

            for (let i = 0; i < 3; i++) {
                    //need to figure out how to update dates..
                        html += '<div class="weather-card">'
                        html += '<div><h3>' + data.daily[i].temp.max + '/' + data.daily[i].temp.min + '</h3></div>'
                        html += '<div><p> Expected Forecast:' + data.daily[i].weather[0].main + '</p></div>'
                        html += '</div>'
            }
            weatherDiv.innerHTML = html;
        })
}


