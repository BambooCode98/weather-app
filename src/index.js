'use strict';

import './modules/domStuff.js';
import './modules/geoAPI.js';
import './modules/weatherAPI.js';
import './style.css';

import { getCityCoords } from './modules/geoAPI';
import { getWeatherData } from './modules/weatherAPI';

let coordinates = [];
let lat, long;
let location, state, country;
location = "Vergennes";
state = "IL";
country = "US";

//event here

getCityCoords(location, state, country)
  .then( values => {
    let x, y;
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
        console.log(days[0].temperature);
      })
  })













