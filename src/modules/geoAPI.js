'use strict';


export async function getCityCoords(location, state, country) {
  let lat;
  let long;
  const city = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location},${state},${country}&appid=daa0efcefa043d17b3c66f5e04fe9bd7`, {mode: 'cors'});
  const cityData = await city.json();
  lat =  Math.round(cityData[0].lat * 100) / 100;
  long = Math.round(cityData[0].lon * 100) / 100;
  return [lat, long];
}

// getCity().catch( error => {
//   console.log(error);
// })

