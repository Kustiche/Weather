import { favoriteArray } from "./favoriteArray.js";
import { render } from "./render.js";
import { cityOutput, forecast, degreeNow, degreeFelt, detailHumidity, detailSunrise, detailSunset, detailWind } from "./view.js";


export function addFavoriteArray() {
  const cityName = cityOutput.textContent;
  const cityArray = favoriteArray.find((city) => city.name === cityName);

  if (cityArray === undefined) {
    favoriteArray.push({
      name: cityName,
      forecast: forecast.textContent,
      degreeNow: degreeNow.textContent,
      degreeFelt: degreeFelt.textContent,
      detailHumidity: detailHumidity.textContent,
      detailSunrise: detailSunrise.textContent,
      detailSunset: detailSunset.textContent,
      detailWind: detailWind.textContent
    });
  }

  localStorage.setItem('weather', JSON.stringify(favoriteArray));
  render();
}