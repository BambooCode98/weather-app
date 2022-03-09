'use strict';


export async function getWeatherData(lat, long) {


  const weather = await fetch(`https://api.weather.gov/points/${lat},${long}`, {mode: 'cors'});
  const weatherData = await weather.json();
  const forecast = await fetch(weatherData.properties.forecast, {mode: 'cors'});
  const forecastData = await forecast.json();
  const days = forecastData.properties.periods;
  return days;
}










