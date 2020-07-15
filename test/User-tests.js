const chai = require("chai");
const expect = chai.expect;
const User = require("../src/User");
const Recipes = require("../src/recipes");
const Pantry = require("../src/Pantry");
const recipeData = require("../data/recipes");
const usersData = require("../data/users");
const ingredientsData = require("../data/ingredients");

describe ("Users", function() {
  let user, recipe;
  beforeEach(function () {
    user = new User(usersData[0]);
    recipe1 = new Recipes(recipeData[0]);
    recipe2 = new Recipes(recipeData[1]);
    recipe3 = new Recipes(recipeData[2]);
  });

  it ("should be a function", function() {
    expect (User).to.be.a("function");
  });

  it ("should be an instance of Users", function() {
    expect (user).to.be.an.instanceof(User);
  });

  it ("should start with an empty favorites list", function() {
    expect (user.favoriteRecipes).to.deep.equal([]);
  });

  it ("should have a Pantry", function() {
    expect (user.pantry).to.be.an.instanceof(Pantry);
  });

  it ("should be able to add favorite recipes to a list", function() {
    user.addToFav(recipe1);

    expect(user.favoriteRecipes.length).to.equal(1);
  });

  it ("should not add favorite if undefined", function() {
      user.addToFav();
      expect(user.favoriteRecipes.length).to.equal(0);
    });

  it ("should not add favorite if it is anything other than 0", function() {
    user.addToFav(1);
    user.addToFav(-47);
    expect(user.favoriteRecipes.length).to.equal(0);
  });

  it ("should not add true to it's favorites list", function() {
    user.addToFav(true);
    expect(user.favoriteRecipes.length).to.equal(0);
  })

  it ("should be able to favorite multiple recipes", function() {
    user.addToFav(recipe1);
    user.addToFav(recipe2);

    expect(user.favoriteRecipes.length).to.equal(2);
  });

  it ("should be able to remove a recipe from the favorites list", function() {
    user.addToFav(recipe1);
    user.addToFav(recipe2);
    user.addToFav(recipe3);
    user.removeFromFav(recipe2);

    expect(user.favoriteRecipes).to.deep.equal([recipe1, recipe3]);
  });

  it ("should add/remove favorites based on the contents of the favorite recipes list", function() {
    user.favoriteRecipe(recipe1);
    user.favoriteRecipe(recipe2);
    user.favoriteRecipe(recipe3);
    user.favoriteRecipe(recipe2);

    expect(user.favoriteRecipes).to.deep.equal([recipe1, recipe3]);
  });

  it ("should start with an empty recipes to cook list", function() {
    expect (user.recipesToCook).to.deep.equal([]);
  });

  it ("should be able to add recipes to a list", function() {
    user.addToCook(recipe1)

    expect(user.recipesToCook.length).to.equal(1);
  });

  it ("should not add to the to-cook list if it is undefined", function() {
    user.addToCook(undefined);
    expect(user.recipesToCook.length).to.equal(0);
  })

  it ("should not add to the to-cook list if a non-zero number", function() {
    user.addToCook(1);
    user.addToCook(-47);
    expect(user.recipesToCook.length).to.equal(0);
  });

  it ("should not add true to its cook list", function() {
    user.addToCook(true);
    expect(user.recipesToCook.length).to.equal(0);
  });

  it ("should be able to filter favorite recipes", function() {
    user.favoriteRecipe(recipe1);
    user.favoriteRecipe(recipe2);
    user.favoriteRecipe(recipe3);

    expect(user.filterFavRecipes("snack")).to.deep.equal([recipe1]);
  });

  it ("should be able to search all recipes by name", function() {
    user.searchRecipes();
    expect(user.searchRecipes("Maple Dijon Apple").length).to.equal(1);
  });

  it ("should be able to search all recipes by tag", function() {
    user.searchRecipes();
    expect(user.searchRecipes("antipasti").length).to.equal(9);
  });

  it ("should be able to search all recipes by ingredient", function() {
    expect(user.searchByIngredient().length).to.equal(1);
  });
});
