export let favoriteArray = JSON.parse(localStorage.getItem('weather'));

if (favoriteArray === null) {
  favoriteArray = [];
}