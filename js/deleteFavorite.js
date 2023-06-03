import { favoriteArray } from "./favoriteArray.js";
import { render } from "./render.js";


export function deleteFavorite(e) {
  const isDesiredBtn = e.target.className === 'weather__favorite-btn btn-reset';

  if (isDesiredBtn) {
    const favorite = e.target.closest('.weather__favorite');
    const cityName = favorite.querySelector('.weather__favorite-excerpt');

    const arrayIndex = favoriteArray.findIndex((favorite) => favorite.name === cityName.textContent);

    favoriteArray.splice(arrayIndex, 1);

    render()
  };
};