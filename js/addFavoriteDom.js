import { favorites, template } from "./view.js";

export function addFavoriteDom(cityName) {
  const item = template.content.cloneNode(true);

  if (cityName === '') {
    return;
  }else {
    item.querySelector('.weather__favorite-excerpt').textContent = cityName;
    favorites.append(item);
  };
};