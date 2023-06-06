import { forecastTemplate, forecasts } from "./view.js";
import { forecastArray } from "./forecastArray.js";

export function createForecastElements(cityName) {

  if (cityName === '') {
    return;
  }else {
    forecasts.textContent = '';

    for (let index = 0; index < 8; index++) {
      const {dt: dateTime, main: mainInformation, weather: [weatherInformation]} = forecastArray[index];
      const item = forecastTemplate.content.cloneNode(true);
      const dateTimeSeconds = new Date(dateTime * 1000);
      let hours = '';
      let minutes = '';
      const day = dateTimeSeconds.getDay();
      const month = dateTimeSeconds.getMonth();
      const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      if (dateTimeSeconds.getHours() < 10) {
        hours = `0${dateTimeSeconds.getHours()}`;
      }else {
        hours = dateTimeSeconds.getHours();
      };
      if (dateTimeSeconds.getMinutes() < 10) {
        minutes = `0${dateTimeSeconds.getMinutes()}`;
      }else {
        minutes = dateTimeSeconds.getMinutes();
      };

      item.querySelector('.weather__date').textContent = `${day} ${monthArray[month]}`;
      item.querySelector('.weather__time').textContent = `${hours}:${minutes}`;
      item.querySelector('.weather__temperature').textContent = `Temperature: ${Math.round(mainInformation.temp+ -273)}`;
      item.querySelector('.weather__temperature--feels-like').textContent = `Feels like: ${Math.round(mainInformation.feels_like+ -273)}`;
      item.querySelector('.forecast-next-day').textContent = weatherInformation.main;
      forecasts.append(item);
    }
  }
}