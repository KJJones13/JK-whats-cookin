const favRecipeBtn = document.querySelector(".favorite-recipes-btn");
const groceryListBtn = document.querySelector(".grocery-list-btn");
const usersBtn = document.querySelector(".users-btn");
const saveBtn = document.querySelector(".save-btn");

window.addEventListener('load', openRecipeInfo)
// favRecipeBtn.addEventListener("click", showMessage);
// groceryListBtn.addEventListener("click", showMessage);
// usersBtn.addEventListener("click", showMessage);
// saveBtn.addEventListener("click", showMessage);


// let user = new Users();
//
// function showMessage() {
//   alert(user);
//   return user;
// }

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
