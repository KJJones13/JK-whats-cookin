const Pantry = require("../src/Pantry");
const recipeData = require("../data/recipes");
const ingredientsData = require("../data/ingredients");

class User {
  constructor(user) {
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.name = user.name;
    this.id = user.id;
    this.pantry = new Pantry(user.pantry);
  }

  addToFav(recipe) {
    if(typeof recipe === "object") {
      this.favoriteRecipes.push(recipe)
    }
  }

  removeFromFav(recipe) {
    this.favoriteRecipes.forEach((favRecipe) => {
      if (favRecipe === recipe) {
        this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(favRecipe), 1)
      }
    })
  }

  favoriteRecipe(recipe) {
    if (this.favoriteRecipes.includes(recipe)) {
      this.removeFromFav(recipe);
    } else {
      this.addToFav(recipe);
    }
  }

  addToCook(recipe) {
    if(typeof recipe === "object") {
      this.recipesToCook.push(recipe);
    }
  }

  filterFavRecipes(type) {
    const foundRecipes = this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(type)
    })

    return foundRecipes;
  }

  filterToCook(type) {
    const foundRecipes = this.recipesToCook.filter(recipe => {
      return recipe.tags.includes(type)
    })

    return foundRecipes;
  }
  searchRecipes(userInput) {
    let foundRecipes = null;
    foundRecipes = recipeData.filter(recipe => {

      if(recipe.name.includes(userInput)) {
        return recipe;
      }
      if(recipe.tags.includes(userInput)) {
        return recipe;
      }
    })

    return foundRecipes;
  }
  // searchByIngredient(userInput) {
  //   let foundIngredient = ingredientsData.find(ingredient => {
  //     return ingredient.name === userInput;
  //   })
  //   return foundIngredient;
  // }
}

// if(recipe.tags.includes(userInput) || recipe.name.includes(userInput) || recipe.ingredients.includes(userInput)) {

if (typeof module !== "undefined") {
  module.exports = User;
}
