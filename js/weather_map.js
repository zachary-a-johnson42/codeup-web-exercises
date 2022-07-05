'use strict'

//Example API Call for OpenWeather

//pro.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d30e65317cceb4aa2e55fe950b727ac6

//For weather?q = long and lat from Mapbox? APPID= OpenWeatherKey

//Get the current weather..
// current.temp
//current.weather[0].main?

//Next 4 days forecast..
// daily[0] = next day and then [1],[2],[3] etc
// daily.temp.min & daily.temp.max
// daily.weather[0].main

let baseURL = 'https://api.openweathermap.org/data/2.5/onecall?'
let lati= 47.653525
let long = -122.323832
let weatherDiv = document.getElementById('weather-cards');


function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly&appid=${weatherToken}`
    ).then(res => res.json())
        .then(data => {
            console.log(data)
            //Need to use time to get dates.
            let html = '<div class="weather-card">'
            html += '<h1> Currently: ' +  data.current.temp + '</h1>'
            html += '<p> Expected Forecast: ' + data.current.weather[0].main + '</p>'
            html += '</div>'
                for (let i = 0; i < 4; i++) {
                    //need to figure out how to update dates..
                        html += '<div class="weather-card">'
                        html += '<h3> High:' + data.daily[0].temp.max + '</h3>'
                        html += '<h3> Low:' + data.daily[0].temp.min +'</h3>'
                        html += '<p> Expected Forecast:' + data.daily[0].weather[0].main + '</p>'
                        html += '</div>'
                }
            console.log('tomorrow max temp.. ' + data.daily[0].temp.max)
            console.log('tomorrow min temp.. ' + data.daily[0].temp.min)
            console.log('weather for tomorrow is.. ' + data.daily[0].weather[0].main)
            console.log('weather description for tomorrow is.. ' + data.daily[0].weather[0].description)

                weatherDiv.innerHTML = html;
        })
}


