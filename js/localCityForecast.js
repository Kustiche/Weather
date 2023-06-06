import { cityOutput, forecast, degreeNow, degreeFelt, detailHumidity, detailSunrise, detailSunset, detailWind } from "./view.js";
import { favoriteArray } from "./favoriteArray.js";
import { forecastAPI, weatherAPI } from "./weatherAPI.js";

export function localCityForecast(city) {
  const cityArray = favoriteArray.find((favorite) => favorite.name === city);

  if (cityArray === undefined) {
    if (city !== '') {
      weatherAPI(city);
      forecastAPI(city);
    }
  }else {
    const {name: cityName, forecast: cityForecast, detailWind: cityDetailWind, detailSunset: cityDetailSunset, detailSunrise: cityDetailSunrise, detailHumidity: cityDetailHumidity, degreeNow: cityDegreeNow, degreeFelt: cityDegreeFelt } = cityArray;

    cityOutput.textContent = cityName;
    forecast.textContent = cityForecast;
    degreeNow.textContent = cityDegreeNow;
    degreeFelt.textContent = cityDegreeFelt;
    detailHumidity.textContent = cityDetailHumidity;
    detailSunrise.textContent = cityDetailSunrise;
    detailSunset.textContent = cityDetailSunset;
    detailWind.textContent = cityDetailWind;

    forecastAPI(cityName)
  };
};