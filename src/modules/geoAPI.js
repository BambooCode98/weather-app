'use strict';

let town = "Vergennes";

export async function getCity() {
  let city = await fetch(`https://geocode.xyz/${town}?json=1`,  {mode: 'cors'});
  const cityData = await city.json();
  console.log(cityData);
  const lat = Math.round(cityData.alt.loc[1].latt * 100) / 100;
  const long = Math.round(cityData.alt.loc[1].longt * 100) / 100;
}


getCity().catch( error => {
  console.log(error);
})


