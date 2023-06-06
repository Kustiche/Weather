import { favorites, favoriteTemplate } from "./view.js";

export function addFavoriteDom(cityName) {
  const item = favoriteTemplate.content.cloneNode(true);

  if (cityName === '') {
    return;
  }else {
    item.querySelector('.weather__favorite-excerpt').textContent = cityName;
    favorites.append(item);
  };
};