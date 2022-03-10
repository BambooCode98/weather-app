'use strict';


export async function getCityCoords(location, state, country) {

  // if(state === "Alabama") {
  //   state = "AL";
  // } else if(state === "Alaska") {
  //   state = "AK";
  // } else if(state === "Arizona") {
  //   state = "AZ";
  // } else if(state === "Arkansas") {
  //   state = "AR";
  // } else if(state === "California") {
  //   state = "CA";
  // } else if(state === "Colorado") {
  //   state = "CO";
  // } else if(state === "Connecticut") {
  //   state = "CT";
  // } else if(state === "Delaware") {
  //   state = "DE";
  // } else if(state === "Florida") {
  //   state = "FL";
  // } else if(state === "Georgia") {
  //   state = "GA";
  // } else if(state === "Hawaii") {
  //   state = "HI";
  // } else if(state === "Idaho") {
  //   state = "ID";
  // } else if(state === "Illinois") {
  //   state = "IL";
  // } else if(state === "Indiana") {
  //   state = "IN";
  // } else if(state === "Iowa") {
  //   state = "IA";
  // } else if(state === "Kansas") {
  //   state = "KS";
  // } else if(state === "Kentucky") {
  //   state = "KY";
  // } else if(state === "Lousiana") {
  //   state = "LA";
  // } else if(state === "Maine") {
  //   state = "ME";
  // } else if(state === "Maryland") {
  //   state = "MD";
  // } else if(state === "Massachusetts") {
  //   state = "MA";
  // } else if(state === "Michigan") {
  //   state = "MI";
  // } else if(state === "Minnesota") {
  //   state = "MN";
  // } else if(state === "Mississippi") {
  //   state = "MS";
  // } else if(state === "Missouri") {
  //   state = "MO";
  // } else if(state === "Montana") {
  //   state = "MT";
  // } else if(state === "Nebraska") {
  //   state = "NE";
  // } else if(state === "Nevada") {
  //   state = "NV";
  // } else if(state === "New Hampshire") {
  //   state = "NH";
  // } else if(state === "New Jersey") {
  //   state = "NJ";
  // } else if(state === "New Mexico") {
  //   state = "NM";
  // } else if(state === "New York") {
  //   state = "NY";
  // } else if(state === "North Carolina") {
  //   state = "NC";
  // } else if(state === "North Dakota") {
  //   state = "ND";
  // } else if(state === "Ohio") {
  //   state = "OH";
  // } else if(state === "Oklahoma") {
  //   state = "OK";
  // } else if(state === "Oregon") {
  //   state = "OR";
  // } else if(state === "Pennsylvania") {
  //   state = "PA";
  // } else if(state === "Rhode Island") {
  //   state = "RH";
  // } else if(state === "South Carolina") {
  //   state = "SC";
  // } else if(state === "South Dakota") {
  //   state = "SD";
  // } else if(state === "Tennessee") {
  //   state = "TN";
  // } else if(state === "Texas") {
  //   state = "TX";
  // } else if(state === "Utah") {
  //   state = "UT";
  // } else if(state === "Vermont") {
  //   state = "VT";
  // } else if(state === "Virginia") {
  //   state = "VA";
  // } else if(state === "Washington") {
  //   state = "WA";
  // } else if(state === "Wisconsin") {
  //   state = "WI";
  // } else if(state === "Wyoming") {
  //   state = "WY";
  // } else if(state === "West Virginia") {
  //   state = "WV";
  // }

  let lat;
  let long;
  const city = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location},${state},${country}&appid=daa0efcefa043d17b3c66f5e04fe9bd7`, {mode: 'cors'});
  const cityData = await city.json();
  lat =  Math.round(cityData[0].lat * 100) / 100;
  long = Math.round(cityData[0].lon * 100) / 100;
  return [lat, long];
}



