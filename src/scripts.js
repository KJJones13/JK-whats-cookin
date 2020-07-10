const favRecipeBtn = document.querySelector(".favorite-recipes-btn");
const groceryListBtn = document.querySelector(".grocery-list-btn");
const usersBtn = document.querySelector(".users-btn");
const saveToBoxBtn = document.querySelector(".save-to-box-btn");

favRecipeBtn.addEventListener("click", showMessage);
groceryListBtn.addEventListener("click", showMessage);
usersBtn.addEventListener("click", showMessage);
saveToBoxBtn.addEventListener("click", showMessage);

let user = new Users();

function showMessage() {
  alert(user);
  return user;
}
