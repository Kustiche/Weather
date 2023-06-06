import { form, cityOutput, favoriteBtn, favorites, search } from "./view.js";
import { forecastAPI, weatherAPI } from "./weatherAPI.js";
import { addFavoriteArray } from "./addFavoriteArray.js";
import { deleteFavorite } from "./deleteFavorite.js";
import { cityForecast } from "./cityForecast.js";
import { render } from "./render.js";
import { localCityForecast } from "./localCityForecast.js";
import { favoriteArray } from "./favoriteArray.js";

let cityName = '';
const isEmptyOutput = cityOutput.textContent === '';

if (isEmptyOutput) {
  cityOutput.textContent = JSON.parse(localStorage.getItem('cityName'));
  localCityForecast(cityOutput.textContent);
};

render();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  cityName = search.value;
  localStorage.setItem('cityName', JSON.stringify(cityName));

  cityOutput.textContent = search.value;

  weatherAPI(cityName);
  forecastAPI(cityName);
});

favoriteBtn.addEventListener('click', () => {
  addFavoriteArray()
});

favorites.addEventListener('click', (e) => {
  cityForecast(e);
  localStorage.setItem('cityName', JSON.stringify(cityOutput.textContent));
  deleteFavorite(e);
  localStorage.setItem('weather', JSON.stringify(favoriteArray));
});