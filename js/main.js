import { form, cityOutput, favoriteBtn, favorites } from "./view.js";
import { weatherAPI } from "./weatherAPI.js";
import { addFavoriteArray } from "./addFavoriteArray.js";
import { deleteFavorite } from "./deleteFavorite.js";
import { cityForecast } from "./cityForecast.js";

let cityName = '';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const search = document.querySelector('.form__search');

  cityName = search.value;
  cityOutput.textContent = search.value;

  weatherAPI(cityName);
});

favoriteBtn.addEventListener('click', () => {
  addFavoriteArray()
});

favorites.addEventListener('click', (e) => {
  cityForecast(e);
  deleteFavorite(e);
});