/*-----------Data-----------*/
// const recipeData = require("../data/recipes")
/*-----------Views-----------*/
const homeView = document.querySelector(".home-view");
const userView = document.querySelector(".user-view");
const favoriteView = document.querySelector(".favorites-view");
const groceryView = document.querySelector(".groceryList-view");
/*-----------Buttons-----------*/
const favRecipeBtn = document.querySelector(".favorite-recipes-btn");
const groceryListBtn = document.querySelector(".grocery-list-btn");
const usersBtn = document.querySelector(".users-btn");
// const saveBtn = document.querySelector(".save-btn");
const homeBtn = document.querySelector(".home-btn")

/*-----------Variable Instantiation-----------*/
let currentUser;
let recipes;

window.addEventListener('load', buildHomeView)
homeBtn.addEventListener("click", changeView)
favRecipeBtn.addEventListener("click", changeView);
groceryListBtn.addEventListener("click", changeView);
usersBtn.addEventListener("click", changeView);
// saveBtn.addEventListener("click", changeView);

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

function buildHomeView() {
  for (let i = 0; i < recipeData.length; i++) {
    let newRecipeCard = `
    <section class="recipe-card" id=${recipeData[i].id}>
      <section class="card-head">
        <img class="card-image" src=${recipeData[i].image}>
        <button type="button" class="save-btn" id=${recipeData[i].id}>Save Recipe</button>
      </section>
      <section class="card-body">
        <button type="button" class="collapsible">${recipeData[i].name}</button>
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
    homeView.insertAdjacentHTML('beforeend', newRecipeCard);
  }

  loadRandomUser()
  openRecipeInfo()
}

/*-----------View-Related Functions-----------*/
function changeView(event) {
  if (event.target.className === "users-btn") {
    homeView.classList.add('hidden');
    userView.classList.remove('hidden');
    favoriteView.classList.add('hidden');
    groceryView.classList.add('hidden');
    displayUsers();
  } else if (event.target.className === "favorite-recipes-btn") {
      homeView.classList.add('hidden');
      userView.classList.add('hidden');
      favoriteView.classList.remove('hidden');
      groceryView.classList.add('hidden');
  } else if (event.target.className === "grocery-list-btn") {
      homeView.classList.add('hidden');
      userView.classList.add('hidden');
      favoriteView.classList.add('hidden');
      groceryView.classList.remove('hidden');
  } else if (event.target.className === "home-btn") {
      homeView.classList.remove('hidden');
      userView.classList.add('hidden');
      favoriteView.classList.add('hidden');
      groceryView.classList.add('hidden');
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
        <th>${user.pantry}</th>
      </tr>
    </table>
    `;
    userView.insertAdjacentHTML('beforeend', newUser);
  })
}
