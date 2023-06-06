import { forecast, degreeNow, degreeFelt, detailHumidity, detailSunrise, detailSunset, detailWind, cityOutput, search } from "./view.js";
import { cleaningForecastArray, forecastArray } from "./forecastArray.js";
import { createForecastElements } from "./createForecastElements.js";

let serverUrl = '';
const apiKey = '44c1a218aa3a304cad0f0d8be43fa9fb';

function time(dateTime) {
  const seconds = new Date(dateTime * 1000);
  let hours = '';
  let minutes = '';

  if (seconds.getHours() < 10) {
    hours = `0${seconds.getHours()}`;
  }else {
    hours = seconds.getHours();
  };

  if (seconds.getMinutes() < 10) {
    minutes = `0${seconds.getMinutes()}`;
  }else {
    minutes = seconds.getMinutes();
  };

  return `${hours}:${minutes}`;
};

export function weatherAPI(cityName) {
  serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const {main: {...mainInformation}, sys: {...sysInformation}, weather: [{main}], wind: {speed}} = data;

      forecast.textContent = main;
      degreeNow.textContent = Math.round(mainInformation.temp+ - 273);
      degreeFelt.textContent = Math.round(mainInformation.feels_like+ - 273);
      detailHumidity.textContent = mainInformation.humidity + '%';

      detailSunset.textContent = time(sysInformation.sunset);
      detailSunrise.textContent = time(sysInformation.sunrise);
      detailWind.textContent = speed + 'km/h';
    })
    .catch(() => {
      window.modalError.showModal();
      cityOutput.textContent = '';
      search.value = '';
    })
};

export function forecastAPI(cityName) {
  serverUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cleaningForecastArray();

      const {list: [...information]} = data;

      for (let index = 0; index < 8; index++) {
        forecastArray.push(information[index]);
      };

      createForecastElements(cityName);
    })

}