import { form, cityOutput } from "./view.js";
import { weatherAPI } from "./weatherAPI.js";

let cityName = '';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const search = document.querySelector('.form__search');

  cityName = search.value;
  cityOutput.textContent = search.value;

  weatherAPI(cityName);
})