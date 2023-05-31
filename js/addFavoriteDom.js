import { favorites, template } from "./view.js";

export function addFavoriteDom(cityName) {
  const item = template.content.cloneNode(true);

  item.querySelector('.weather__favorite-excerpt').textContent = cityName;
  favorites.append(item);
};