/*-----------Views-----------*/
const homeView = document.querySelector(".home-view");
const userView = document.querySelector(".user-view");
const favoriteView = document.querySelector(".favorites-view")
const favoriteRecipeGrid = document.querySelector(".favorite-recipes-grid");
const searchView = document.querySelector(".search-results-view");
/*-----------Buttons-----------*/
const favRecipeBtn = document.querySelector(".favorite-recipes-btn");
const usersBtn = document.querySelector(".users-btn");
const homeBtn = document.querySelector(".home-btn");
const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector("#search-bar");

/*-----------Variable Instantiation-----------*/
let currentUser;
let recipes;
let saveBtn;

window.addEventListener('load', buildHomeView);
homeBtn.addEventListener("click", changeView);
favRecipeBtn.addEventListener("click", changeView);
usersBtn.addEventListener("click", changeView);
searchBtn.addEventListener("click", changeView);

/*-----------Page Load Functions-----------*/
function openRecipeInfo() {
  let coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function loadRandomUser() {
  currentUser = new User(usersData[getRandomIndex(usersData)])
}

function createRecipes(source) {
  recipes = source.map(recipe => {
    return new Recipe(recipe)
  })

  return recipes
}

function returnIngredientName(ingredientId) {
  let foundIngredient = ingredientsData.find(currentIngredient => {
    return currentIngredient.id === ingredientId
  })
  return foundIngredient.name
}

function buildHomeView() {
  createRecipes(recipeData)
  recipes.forEach(recipe => {
    let newRecipeCard = `
    <section class="recipe-card" id=${recipe.id}>
      <section class="card-head">
        <img class="card-image" src=${recipe.image}>
        <button type="button" class="save-btn" id=${recipe.id}>Save</button>
      </section>
      <section class="card-body">
        <button type="button" class="collapsible">${recipe.name}</button>
        <section class="content">
          <section class="ingredients">
            <p>Ingredients</p>
            <ul>
              ${recipe.ingredients.map(ingredient => {
                return `<li>${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit} of ${returnIngredientName(ingredient.id)}</li>`
                }).join("")
              }
            </ul>
          </section>
          <section class="instructions">
            <p>Instructions<p>
            <ol>
              ${recipe.instructions.map(instruction => {
                return `<li>${instruction.instruction}</li>`
              }).join("")}
            </ol>
          </section>
        </section>
      </section>
    `;
    homeView.insertAdjacentHTML('beforeend', newRecipeCard);
    return saveBtn = document.getElementsByClassName("save-btn");
  });

  addClickToSaveButton()
  loadRandomUser()
  openRecipeInfo()
}

function addClickToSaveButton() {
  if (saveBtn) {
    for (let i = 0; i < saveBtn.length; i++) {
      saveBtn[i].addEventListener("click", addFavoriteRecipe)
    }
  }
}

/*-----------Search-Related Functions-----------*/
function searchAllRecipes() {
  event.preventDefault();
  clearSearchResults();
  return currentUser.searchRecipes(searchBar.value)
}
function clearSearchResults() {
  searchView.innerText = ""
}

function buildResultsSection(recipes) {
  createRecipes(recipes).forEach(recipe => {
    let newRecipeCard = `
    <section class="recipe-card" id=${recipe.id}>
      <section class="card-head">
        <img class="card-image" src=${recipe.image}>
        <button type="button" class="save-btn" id=${recipe.id}>Save</button>
      </section>
      <section class="card-body">
        <button type="button" class="collapsible">${recipe.name}</button>
        <section class="content">
          <section class="ingredients">
            <p>Ingredients</p>
            <ul>
            ${recipe.ingredients.map(ingredient => {
              return `<li>${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit} of ${returnIngredientName(ingredient.id)}</li>`
              }).join("")
            }
            </ul>
          </section>
          <section class="instructions">
            <p>Instructions<p>
            <ol>
            ${recipe.instructions.map(instruction => {
              return `<li>${instruction.instruction}</li>`
            }).join("")}
            </ol>
          </section>
        </section>
      </section>
    `;
    searchView.insertAdjacentHTML('beforeend', newRecipeCard);

    addClickToSaveButton();
    openRecipeInfo();
  })
}

/*-----------View-Related Functions-----------*/
function hideAllViews() {
  homeView.classList.add('hidden');
  userView.classList.add('hidden');
  favoriteView.classList.add('hidden');
  searchView.classList.add('hidden');
}

function changeView(event) {
  hideAllViews()

  if (event.target.className === "users-btn") {
    userView.classList.remove('hidden');
    displayUsers();
  } else if (event.target.className === "favorite-recipes-btn") {
    favoriteView.classList.remove('hidden');
    displayFavoriteRecipes();
  } else if (event.target.className === "home-btn") {
    homeView.classList.remove('hidden');
  } else if (event.target.className === "search-btn") {
    searchView.classList.remove('hidden');
    buildResultsSection(searchAllRecipes());
  }
}

function displayUsers() {
  usersData.forEach(user => {
    let newUser = `
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Pantry</th>
      </tr>
      <tr>
        <th>${user.id}</th>
        <th>${user.name}</th>
        <th>
          <ul>
          ${user.pantry.map(item => {
            return `<li>${item.amount}: ${returnIngredientName(item.ingredient)}</li>`
          }).join("")}
          </ul>
        </th>
      </tr>
    </table>
    `;
    userView.insertAdjacentHTML('beforeend', newUser);
  })
}
/*-----------Favorite Recipes-----------*/
function findRecipe(recipeId) {
  return recipes.find(recipe => {
    return recipe.id == recipeId
  })
}

function addFavoriteRecipe(event) {
  let newRecipe = findRecipe(event.target.id);
  currentUser.favoriteRecipe(newRecipe);
}

function clearFavoritesGrid() {
  let currentGrid = document.querySelector(".favorite-recipes-grid");
  return currentGrid.innerText = "";
}

function displayFavoriteRecipes() {
  clearFavoritesGrid();

  currentUser.favoriteRecipes.forEach(recipe => {
    let newFavoriteRecipe = `
    <section class="mini-recipe-card" id="${recipe.id}">
      <img src=${recipe.image}>
      <p>${recipe.name}</p>
    </section>
    `;
    favoriteRecipeGrid.insertAdjacentHTML('afterbegin', newFavoriteRecipe)
  })

  openFavoriteInfo();
}

function displayRecipeInfoPopup(recipe) {
  searchView.innerText = "";

  let popupRecipe = `
    <img src=${recipe.image}>
    <h2 class="popup-name">${recipe.name}</h2>
    <ul class="popup-ingredients">
    <h3>Ingredients</h3>
    ${recipe.ingredients.map(ingredient => {
      return `<li>${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit} of ${returnIngredientName(ingredient.id)}</li>`
      }).join("")
    }</ul>
    <ol class="popup-instructions">
    <h3>Instructions</h3>
    ${recipe.instructions.map(instruction => {
      return `<li>${instruction.instruction}</li>`
    }).join("")}
    </ol>
  </section>
  `;
  return popupRecipe;
}

function buildFavoritePopup(event) {
  let popup = document.getElementById("favorite-popup");

  let popupBody = document.getElementById("popup-content");

  let closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function() {
    popupBody.innerHTML = `<section id="popup-content">
      <span class="close">&times;</span>
      </section>`;
    popup.style.display = "none";
  }

  let foundRecipe = findRecipe(event.currentTarget.id);
  popupBody.insertAdjacentHTML("beforeend", displayRecipeInfoPopup(foundRecipe));

  popup.style.display = "block"
}

function openFavoriteInfo() {
  let coll = document.getElementsByClassName("mini-recipe-card");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", buildFavoritePopup);
  }
}
