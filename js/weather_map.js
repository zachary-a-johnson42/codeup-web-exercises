'use strict'
//setting token
mapboxgl.accessToken = mapBoxToken;

//setting lng & lat for manipulation
let long;
let lati;

//Creating map, attaching it to div with map ID
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-122.330062, 47.603832], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

//on click, grabs geocode of where the event happened, gets weather for location, and recenters map
map.on('click', (e) => {
    let location = e.lngLat
    long = location.lng;
    lati = location.lat;
    getWeather(lati, long)
    map.setCenter([long, lati])
})

// Creating dates for our 5 day forecast
let date = new Date();

let currentYear = date.getFullYear();

// Month is zero based, i.e. Jan is 0. Adding 1 to match user expectations
let currentMonth = date.getMonth() +1

let currentDay = date.getDate();

// The string output we desire for today's date! Now to manipulate for the next 4 days..
let currentWeatherDate = `${currentYear}/${currentMonth}/${currentDay}`

//Div to attach our 5 day forecast to
let weatherDiv = document.getElementById('weather-cards');


function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function (res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function (data) {
            return data.features[0].center;
        });
}


function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly&appid=${weatherToken}`
    ).then(res => res.json())
        .then(data => {
            console.log(data)
            //Need to use time to get dates.
            let html = '<div class="weather-card">'
            html += '<div><p>' + currentWeatherDate + '</p></div>'
            html += '<img src="http://openweathermap.org/img/w/' + `${data.current.weather[0].icon}` + '.png"/>'
            html += '<div><p> Currently: ' +  Math.round(data.current.temp) + '°F</p></div>'
            html += '<div><p> Forecast: ' + data.current.weather[0].main + '</p></div>'
            html += '</div>'

            for (let i = 0; i < 4; i++) {
                    //need to figure out how to update dates..
                        let dateBase = new Date();
                        let setForecastDates = dateBase.setDate(dateBase.getDate() + (i + 1))
                        let dateResult = new Date(setForecastDates)
                        let forecastYear = dateResult.getFullYear()
                        let forecastMonth = dateResult.getMonth() + 1
                        let forecastDate = dateResult.getDate();

                        html += '<div class="weather-card">'
                        html += '<div><p>' + `${forecastYear}/${forecastMonth}/${forecastDate}` + '</p></div>'
                        html += '<img src="http://openweathermap.org/img/w/' + `${data.daily[i].weather[0].icon}` + '.png"/>'
                        html += '<div><h3>' + Math.round(data.daily[i].temp.max) + '°F/' + Math.round(data.daily[i].temp.min) + '°F</h3></div>'
                        html += '<div><p>Forecast:' + data.daily[i].weather[0].main + '</p></div>'
                        html += '</div>'
            }
            weatherDiv.innerHTML = html;
        })
}

let addressData = document.getElementById('address-input')
let addressSubmit = document.getElementById('address-submit')

addressSubmit.addEventListener("click", ()=>{
    geocode(addressData.value, mapBoxToken)
        .then(results =>{
            map.setCenter(results)
            new mapboxgl.Marker().setLngLat(results).addTo(map)
            long = results[0]
            lati = results[1]
            getWeather(lati, long);
        })
})