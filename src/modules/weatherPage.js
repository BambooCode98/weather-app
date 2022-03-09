'use strict';


const temperature4All = document.querySelector('#temperature4All');

const dow0 = document.querySelector('.dow0');
const dow0text = document.querySelector('.dow0text');
const dow0short = document.querySelector('.dow0short');
const dow0temp = document.querySelector('.dow0temp');
const d0icon = document.querySelector('#d0icon');

const dow0ntext = document.querySelector('.dow0ntext');
const dow0nshort = document.querySelector('.dow0nshort');
const dow0ntemp = document.querySelector('.dow0ntemp');
const dow0n = document.querySelector('.dow0n');
const d0nicon = document.querySelector('#d0nicon');

//1
const dow1 = document.querySelector('.dow1');
const dow1text = document.querySelector('.dow1text');
const dow1short = document.querySelector('.dow1short');
const dow1temp = document.querySelector('.dow1temp');
const d1icon = document.querySelector('#d1icon');

const dow1ntext = document.querySelector('.dow1ntext');
const dow1nshort = document.querySelector('.dow1nshort');
const dow1ntemp = document.querySelector('.dow1ntemp');
const dow1n = document.querySelector('.dow1n');
const d1nicon = document.querySelector('#d1nicon');

//2
const dow2 = document.querySelector('.dow2');
const dow2text = document.querySelector('.dow2text');
const dow2short = document.querySelector('.dow2short');
const dow2temp = document.querySelector('.dow2temp');
const d2icon = document.querySelector('#d2icon');

const dow2ntext = document.querySelector('.dow2ntext');
const dow2nshort = document.querySelector('.dow2nshort');
const dow2ntemp = document.querySelector('.dow2ntemp');
const dow2n = document.querySelector('.dow2n');
const d2nicon = document.querySelector('#d2nicon');

//3
const dow3 = document.querySelector('.dow3');
const dow3text = document.querySelector('.dow3text');
const dow3short = document.querySelector('.dow3short');
const dow3temp = document.querySelector('.dow3temp');
const d3icon = document.querySelector('#d3icon');

const dow3ntext = document.querySelector('.dow3ntext');
const dow3nshort = document.querySelector('.dow3nshort');
const dow3ntemp = document.querySelector('.dow3ntemp');
const dow3n = document.querySelector('.dow3n');
const d3nicon = document.querySelector('#d3nicon');

//4
const dow4 = document.querySelector('.dow4');
const dow4text = document.querySelector('.dow4text');
const dow4short = document.querySelector('.dow4short');
const dow4temp = document.querySelector('.dow4temp');
const d4icon = document.querySelector('#d4icon');

const dow4ntext = document.querySelector('.dow4ntext');
const dow4nshort = document.querySelector('.dow4nshort');
const dow4ntemp = document.querySelector('.dow4ntemp');
const dow4n = document.querySelector('.dow4n');
const d4nicon = document.querySelector('#d4nicon');

//5
const dow5 = document.querySelector('.dow5');
const dow5text = document.querySelector('.dow5text');
const dow5short = document.querySelector('.dow5short');
const dow5temp = document.querySelector('.dow5temp');
const d5icon = document.querySelector('#d5icon');

const dow5ntext = document.querySelector('.dow5ntext');
const dow5nshort = document.querySelector('.dow5nshort');
const dow5ntemp = document.querySelector('.dow5ntemp');
const dow5n = document.querySelector('.dow5n');
const d5nicon = document.querySelector('#d5nicon');

export function createForecastPage(forecastDays) {
  
  temperature4All.textContent = "Temperature: "

  dow0.textContent = forecastDays[0].name;
  dow0text.textContent = forecastDays[0].detailedForecast;
  dow0short.textContent = forecastDays[0].shortForecast;
  dow0temp.textContent = forecastDays[0].temperature;
  d0icon.src = forecastDays[0].icon;

  dow0n.textContent = forecastDays[1].name;
  dow0ntext.textContent = forecastDays[1].detailedForecast;
  dow0nshort.textContent = forecastDays[1].shortForecast;
  dow0ntemp.textContent = forecastDays[1].temperature;
  d0nicon.src = forecastDays[1].icon;

  //1
  dow1.textContent = forecastDays[2].name;
  dow1text.textContent = forecastDays[2].detailedForecast;
  dow1short.textContent = forecastDays[2].shortForecast;
  dow1temp.textContent = forecastDays[2].temperature;
  d1icon.src = forecastDays[2].icon;

  dow1n.textContent = forecastDays[3].name;
  dow1ntext.textContent = forecastDays[3].detailedForecast;
  dow1nshort.textContent = forecastDays[3].shortForecast;
  dow1ntemp.textContent = forecastDays[3].temperature;
  d1nicon.src = forecastDays[3].icon;

  //2
  dow2.textContent = forecastDays[4].name;
  dow2text.textContent = forecastDays[4].detailedForecast;
  dow2short.textContent = forecastDays[4].shortForecast;
  dow2temp.textContent = forecastDays[4].temperature;
  d2icon.src = forecastDays[4].icon;

  dow2n.textContent = forecastDays[5].name;
  dow2ntext.textContent = forecastDays[5].detailedForecast;
  dow2nshort.textContent = forecastDays[5].shortForecast;
  dow2ntemp.textContent = forecastDays[5].temperature;
  d2nicon.src = forecastDays[5].icon;

  //3
  dow3.textContent = forecastDays[6].name;
  dow3text.textContent = forecastDays[6].detailedForecast;
  dow3short.textContent = forecastDays[6].shortForecast;
  dow3temp.textContent = forecastDays[6].temperature;
  d3icon.src = forecastDays[6].icon;

  dow3n.textContent = forecastDays[7].name;
  dow3ntext.textContent = forecastDays[7].detailedForecast;
  dow3nshort.textContent = forecastDays[7].shortForecast;
  dow3ntemp.textContent = forecastDays[7].temperature;
  d3nicon.src = forecastDays[7].icon;

  //4
  dow4.textContent = forecastDays[8].name;
  dow4text.textContent = forecastDays[8].detailedForecast;
  dow4short.textContent = forecastDays[8].shortForecast;
  dow4temp.textContent = forecastDays[8].temperature;
  d4icon.src = forecastDays[8].icon;

  dow4n.textContent = forecastDays[9].name;
  dow4ntext.textContent = forecastDays[9].detailedForecast;
  dow4nshort.textContent = forecastDays[9].shortForecast;
  dow4ntemp.textContent = forecastDays[9].temperature;
  d4nicon.src = forecastDays[9].icon;

  //5
  dow5.textContent = forecastDays[10].name;
  dow5text.textContent = forecastDays[10].detailedForecast;
  dow5short.textContent = forecastDays[10].shortForecast;
  dow5temp.textContent = forecastDays[10].temperature;
  d5icon.src = forecastDays[10].icon;

  dow5n.textContent = forecastDays[11].name;
  dow5ntext.textContent = forecastDays[11].detailedForecast;
  dow5nshort.textContent = forecastDays[11].shortForecast;
  dow5ntemp.textContent = forecastDays[11].temperature;
  d5nicon.src = forecastDays[11].icon;

}







