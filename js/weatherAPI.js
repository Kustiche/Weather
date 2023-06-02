import { forecast, degreeNow, degreeFelt, detailHumidity, detailSunrise, detailSunset, detailWind, cityOutput, search } from "./view.js";

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '44c1a218aa3a304cad0f0d8be43fa9fb';

export function weatherAPI(cityName) {
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const {main: {...mainInformation}, sys: {...sysInformation}, weather: [{main}], wind: {speed}} = data;
      const timeSunrise = new Date(sysInformation.sunrise * 1000);
      const timeSunset = new Date(sysInformation.sunset * 1000);

      let timeSunsetHourse = '';
      let timeSunsetMinutes = '';
      let timeSunriseHourse = '';
      let timeSunriseMinutes = '';

      forecast.textContent = main;
      degreeNow.textContent = Math.round(mainInformation.temp+ - 273);
      degreeFelt.textContent = Math.round(mainInformation.feels_like+ - 273);
      detailHumidity.textContent = mainInformation.humidity + '%';

      if (timeSunset.getHours() < 10) {
        timeSunsetHourse = '0' + timeSunset.getHours();
      }else {
        timeSunsetHourse = timeSunset.getHours();
      };
      if (timeSunset.getMinutes() < 10) {
        timeSunsetMinutes = '0' + timeSunset.getMinutes();
      }else {
        timeSunsetMinutes = timeSunset.getMinutes();
      };

      if (timeSunrise.getHours() < 10) {
        timeSunriseHourse = '0' + timeSunrise.getHours();
      }else {
        timeSunriseHourse = timeSunrise.getHours();
      };
      if (timeSunrise.getMinutes() < 10) {
        timeSunriseMinutes = '0' + timeSunrise.getMinutes();
      }else {
        timeSunriseMinutes = timeSunrise.getMinutes();
      };
      detailSunset.textContent = timeSunsetHourse + ':' + timeSunsetMinutes;
      detailSunrise.textContent = timeSunriseHourse + ':' + timeSunriseMinutes;
      detailWind.textContent = speed + 'km/h';
    })
    .catch(() => {
      window.modalError.showModal();
      cityOutput.textContent = '';
      search.value = '';
    })
};