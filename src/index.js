'use strict';

import './modules/weatherPage.js';
import './modules/geoAPI.js';
import './modules/weatherAPI.js';
import './style.css';

import { getCityCoords } from './modules/geoAPI';
import { getWeatherData } from './modules/weatherAPI';
import { createDays } from './modules/weatherPage';

let coordinates = [];
let forecastDays = [];
let lat, long;
// let location, state, country;
// const country = form.querySelector('input[id="country"]').value;
const country = 'US';
let d0, d0n, d1, d1n, d2, d2n, d3, d3n, d4, d4n, d5, d5n;
let x, y;
const form = document.forms['formID'];


form.addEventListener('submit', function(e) {
  e.preventDefault();
  const location = form.querySelector('input[id="location"]').value;
  const state = form.querySelector('input[id="state"]').value;
  
  getCityCoords(location, state, country)
  .then( values => {
    [x, y] = values;
    coordinates.push(x, y);
    console.log(coordinates);
  })
  .then( () => {
    lat = coordinates[0];
    long = coordinates[1];
    console.log(lat, long);
    getWeatherData(lat, long)
    .then( (days) => {
      [d0, d0n, d1, d1n, d2, d2n, d3, d3n, d4, d4n, d5, d5n] = days;
      forecastDays.push(d0, d0n, d1, d1n, d2, d2n, d3, d3n, d4, d4n, d5, d5n);
      console.log(forecastDays);
      // createForecastPage(forecastDays);
      coordinates = [];
      forecastDays = [];
    })
  })
  
  
})














