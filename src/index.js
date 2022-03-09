'use strict';

import './modules/weatherPage.js';
import './modules/geoAPI.js';
import './modules/weatherAPI.js';
import './modules/highlights.js';
import './style.css';

import { getCityCoords } from './modules/geoAPI';
import { getWeatherData } from './modules/weatherAPI';
import { createForecastPage } from './modules/weatherPage';
// import { highlightThings } from './modules/highlights.js';

let coordinates = [];
let forecastDays = [];
let lat, long;
const country = 'US';
let d0, d0n, d1, d1n, d2, d2n, d3, d3n, d4, d4n, d5, d5n;
let x, y;
const form = document.forms['formID'];
const weatherPageClass = document.querySelector('.weather-page');
const errorArea = document.querySelector('.errors');
const errorPage = document.querySelector('.errorPage');


form.addEventListener('submit', function(e) {
  e.preventDefault();
  const location = form.querySelector('input[id="location"]').value;
  const state = form.querySelector('input[id="state"]').value;
  weatherPageClass.style.visibility = 'visible';
  
  getCityCoords(location, state, country)
  .then( values => {
    [x, y] = values;
    coordinates.push(x, y);
    // console.log(coordinates);
  })
  .then( () => {
    lat = coordinates[0];
    long = coordinates[1];
    // console.log(lat, long);
    getWeatherData(lat, long)
    .then( (days) => {
      [d0, d0n, d1, d1n, d2, d2n, d3, d3n, d4, d4n, d5, d5n] = days;
      forecastDays.push(d0, d0n, d1, d1n, d2, d2n, d3, d3n, d4, d4n, d5, d5n);
      console.log(forecastDays);
      createForecastPage(forecastDays);
      // highlightThings(forecastDays);
      coordinates = [];
      forecastDays = [];
    })
    .catch( () => {
      errorArea.textcontent = "Invalid City or State. Otherwise server is not working."
    })
  })
  .catch( () => {
    errorArea.style.display = "block";
    errorArea.textContent = "Invalid City or State.";
    setTimeout(() => {errorArea.style.display = "none"}, 3000);
  })
  
  
})














