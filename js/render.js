import { addFavoriteDom } from "./addFavoriteDom.js";
import { favoriteArray } from "./favoriteArray.js";
import { favorites } from "./view.js";


export function render() {
  favorites.textContent = '';
  favoriteArray.forEach((favorite) => {
    addFavoriteDom(favorite.name);
  })
};