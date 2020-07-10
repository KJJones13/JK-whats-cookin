// const Users = require("../src/users");

const favRecipeBtn = document.querySelector(".favorite-recipes-btn");

favRecipeBtn.addEventListener("click", showMessage);
let user = new Users();

function showMessage() {
  alert(user);
  return user;
}
