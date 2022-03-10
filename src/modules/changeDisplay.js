'use strict';


const mainPage = document.querySelector('.main-page');
const weatherPage = document.querySelector('.weather-page');





export function changeLook(forecastDays) {
  if(forecastDays[0].isDaytime === true) {
    mainPage.style.backgroundColor = "rgba(28, 25, 219, 0.822)";
    weatherPage.style.backgroundColor = "rgb(202, 215, 231)";
  } else if(forecastDays[0].isDaytime === false) {
    mainPage.style.backgroundColor = "black";
    weatherPage.style.backgroundColor = "lightgray";
  }
}












