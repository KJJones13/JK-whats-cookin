const favRecipeBtn = document.querySelector(".favorite-recipes-btn");
const groceryListBtn = document.querySelector(".grocery-list-btn");
const usersBtn = document.querySelector(".users-btn");
const saveBtn = document.querySelector(".save-btn");
const homeBtn = document.querySelector(".home-btn")
const mainView = document.querySelector(".home-view");
const userView = document.querySelector(".user-view");
const favoriteView = document.querySelector(".favorites-view");
const groceryView = document.querySelector(".groceryList-view");

window.addEventListener('load', openRecipeInfo)
homeBtn.addEventListener("click", changeView)
favRecipeBtn.addEventListener("click", changeView);
groceryListBtn.addEventListener("click", changeView);
usersBtn.addEventListener("click", changeView);
saveBtn.addEventListener("click", changeView);

function openRecipeInfo() {
  const coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display=== "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}

function changeView(event) {
  if (event.target.className === "users-btn") {
    mainView.classList.add('hidden');
    userView.classList.remove('hidden');
    favoriteView.classList.add('hidden');
    groceryView.classList.add('hidden');
  } else if (event.target.className === "favorite-recipes-btn") {
      mainView.classList.add('hidden');
      userView.classList.add('hidden');
      favoriteView.classList.remove('hidden');
      groceryView.classList.add('hidden');
  } else if (event.target.className === "grocery-list-btn") {
      mainView.classList.add('hidden');
      userView.classList.add('hidden');
      favoriteView.classList.add('hidden');
      groceryView.classList.remove('hidden');
  } else if (event.target.className === "home-btn") {
      mainView.classList.remove('hidden');
      userView.classList.add('hidden');
      favoriteView.classList.add('hidden');
      groceryView.classList.add('hidden');
  }
}
