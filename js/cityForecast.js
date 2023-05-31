import { cityOutput, forecast, degreeNow, degreeFelt, detailHumidity, detailSunrise, detailSunset, detailWind } from "./view.js";
import { favoriteArray } from "./favoriteArray.js";

export function cityForecast(e) {
  if (e.target.className === 'weather__favorite-excerpt btn-reset') {
    const name = e.target.textContent;
    const cityArray = favoriteArray.find((favorite) => favorite.name === name);

    const {name: cityName, forecast: cityForecast, detailWind: cityDetailWind, detailSunset: cityDetailSunset, detailSunrise: cityDetailSunrise, detailHumidity: cityDetailHumidity, degreeNow: cityDegreeNow, degreeFelt: cityDegreeFelt } = cityArray;

    cityOutput.textContent = cityName;
    forecast.textContent = cityForecast;
    degreeNow.textContent = cityDegreeNow;
    degreeFelt.textContent = cityDegreeFelt;
    detailHumidity.textContent = cityDetailHumidity;
    detailSunrise.textContent = cityDetailSunrise;
    detailSunset.textContent = cityDetailSunset;
    detailWind.textContent = cityDetailWind;
  };
};