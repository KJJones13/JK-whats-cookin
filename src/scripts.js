/*-----------Data-----------*/
// const recipeData = require("../data/recipes")
/*-----------Views-----------*/
const homeView = document.querySelector(".home-view");
const userView = document.querySelector(".user-view");
const favoriteView = document.querySelector(".favorites-view")
const favoriteRecipeGrid = document.querySelector(".favorite-recipes-grid");
const groceryView = document.querySelector(".groceryList-view");
const searchView = document.querySelector(".search-results-view");
/*-----------Buttons-----------*/
const favRecipeBtn = document.querySelector(".favorite-recipes-btn");
const groceryListBtn = document.querySelector(".grocery-list-btn");
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
groceryListBtn.addEventListener("click", changeView);
usersBtn.addEventListener("click", changeView);
searchBtn.addEventListener("click", changeView);

/*-----------Page Load Functions-----------*/
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

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function loadRandomUser() {
  currentUser = new User(usersData[getRandomIndex(usersData)])
}

function createRecipes() {
  recipes = recipeData.map(recipe => {
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
  createRecipes()
  recipes.forEach(recipe => {
    let newRecipeCard = `
    <section class="recipe-card" id=${recipe.id}>
      <section class="card-head">
        <img class="card-image" src=${recipe.image}>
        <button type="button" class="save-btn" id=${recipe.id}>Save Recipe</button>
      </section>
      <section class="card-body">
        <button type="button" class="collapsible">${recipe.name}</button>
        <section class="content">
          <section class="ingredients">
            <p>Ingredients</p>
            <ul>
              ${recipe.ingredients.map(ingredient => {
                return `<li>${ingredient.quantity.amount} ${ingredient.quantity.unit} of ${returnIngredientName(ingredient.id)}</li>`
                })
              }
            </ul>
          </section>
          <section class="instructions">
            <p>Instructions<p>
            <ol>
              ${recipe.instructions.map(instruction => {
                return `<li>${instruction.instruction}</li>`
              })}
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
  recipes.forEach(recipe => {
    let newRecipeCard = `
    <section class="recipe-card" id=${recipe.id}>
      <section class="card-head">
        <img class="card-image" src=${recipe.image}>
        <button type="button" class="save-btn" id=${recipe.id}>Save Recipe</button>
      </section>
      <section class="card-body">
        <button type="button" class="collapsible">${recipe.name}</button>
        <section class="content">
          <section class="ingredients">
            <p>Ingredients</p>
            <ul>
              <li>1.5 c 20081</li>
              <li>0.5 tsp 18372</li>
              <li>1 large 1123</li>
              <li>0.5 c 19335</li>
              <li>3 Tbsp 19206</li>
              <li>0.5 c 19334</li>
              <li>0.5 tsp 2047</li>
              <li>24 servings 1012047</li>
              <li>2 c 10019903</li>
              <li>0.5 c 1145</li>
              <li>0.5 tsp 2050</li>
            </ul>
          </section>
          <section class="instructions">
            <p>Instructions<p>
            <ol>
              <li>In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.</li>
              <li>Add egg and vanilla and mix until combined.</li>
              <li>Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.</li>
              <li>Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.</li>
              <li>Bake for 9 to 10 minutes, or until you see the edges start to brown.</li>
              <li>Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.</li>
            </ol>
          </section>
        </section>
      </section>
    `;
    return searchView.insertAdjacentHTML('beforeend', newRecipeCard);
  });
}
// create a function to return recipes that match the users input
//

/*-----------View-Related Functions-----------*/
function changeView(event) {
  if (event.target.className === "users-btn") {
    homeView.classList.add('hidden');
    userView.classList.remove('hidden');
    favoriteView.classList.add('hidden');
    groceryView.classList.add('hidden');
    searchView.classList.add('hidden');
    displayUsers();
  } else if (event.target.className === "favorite-recipes-btn") {
      homeView.classList.add('hidden');
      userView.classList.add('hidden');
      favoriteView.classList.remove('hidden');
      groceryView.classList.add('hidden');
      searchView.classList.add('hidden');
      displayFavoriteRecipes();
  } else if (event.target.className === "grocery-list-btn") {
      homeView.classList.add('hidden');
      userView.classList.add('hidden');
      favoriteView.classList.add('hidden');
      groceryView.classList.remove('hidden');
      searchView.classList.add('hidden');
  } else if (event.target.className === "home-btn") {
      homeView.classList.remove('hidden');
      userView.classList.add('hidden');
      favoriteView.classList.add('hidden');
      groceryView.classList.add('hidden');
      searchView.classList.add('hidden');
  } else if (event.target.className === "search-btn") {
    homeView.classList.add('hidden');
    userView.classList.add('hidden');
    favoriteView.classList.add('hidden');
    groceryView.classList.add('hidden');
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
          })}
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
    <section class="mini-recipe-card">
      <img src=${recipe.image}>
      <p>${recipe.name}</p>
    </section>
    `;
    favoriteRecipeGrid.insertAdjacentHTML('afterbegin', newFavoriteRecipe)
  })
}
