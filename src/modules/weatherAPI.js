'use strict';

import { getCity } from './geoAPI';

const data = getCity();
console.log(data);
let lat = data[0];
let long = data[1];
console.log(lat,long);
let coordinates = '37.9,-89.33' //`${lat},${long}`;

async function getWeatherData() {


  const weather = await fetch(`https://api.weather.gov/points/${coordinates}`, {mode: 'cors'});
  const weatherData = await weather.json();
  const forecast = await fetch(weatherData.properties.forecast, {mode: 'cors'});
  const forecastData = await forecast.json();
  const sevenDays = forecastData.properties.periods;
  console.log(sevenDays);
  return sevenDays;
}


getWeatherData().catch( error => {
  console.log(error);
})








