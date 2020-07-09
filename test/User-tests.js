const chai = require("chai");
const expect = chai.expect;
const User = require("../src/User");
const recipeData = require("../data/recipes")

describe ("Users", function() {
  let user, recipe;
  beforeEach(function () {
    user = new User();
    recipe1 = recipeData[0]
    recipe2 = recipeData[1]
    recipe3 = recipeData[2]
  });

  it ("should be a function", function() {
    expect (User).to.be.a("function");
  });

  it ("should be an instance of Users", function() {
    expect (user).to.be.an.instanceof(User)
  });

  it ("should start with an empty favorites list", function() {
    expect (user.favoriteRecipes).to.deep.equal([])
  });

  it ("should be able to add favorite recipes to a list", function() {
    user.addToFav(recipe1)

    expect(user.favoriteRecipes.length).to.deep.equal(1);
  });

  it ("should be able to favorite multiple recipes", function() {
    user.addToFav(recipe1);
    user.addToFav(recipe2);

    expect(user.favoriteRecipes.length).to.deep.equal(2);
  });

  it ("should be able to remove a recipe from the favorites list", function() {
    user.addToFav(recipe1);
    user.addToFav(recipe2);
    user.addToFav(recipe3)
    user.removeFromFav(recipe2);

    expect(user.favoriteRecipes).to.deep.equal([recipe1, recipe3]);
  });

  it ("should add/remove favorites based on the contents of the favorite recipes list", function() {
    user.favoriteRecipe(recipe1)
    user.favoriteRecipe(recipe2)
    user.favoriteRecipe(recipe3)
    user.favoriteRecipe(recipe2)

    expect(user.favoriteRecipes).to.deep.equal([recipe1, recipe3])
  });

  it ("should start with an empty recipes to cook list", function() {
    expect (user.recipesToCook).to.deep.equal([])
  });

  it ("should be able to add recipes to a list", function() {
    user.addToCook(recipe1)

    expect(user.recipesToCook.length).to.deep.equal(1);
  });

  it ("should be able to filter favorite recipes", function() {
    user.favoriteRecipe(recipe1)
    user.favoriteRecipe(recipe2)
    user.favoriteRecipe(recipe3)

    expect(user.filterFavRecipes("snack")).to.deep.equal([recipe1]);
  });

  it ("should be able to filter favorite recipes", function() {
    user.addToCook(recipe1)
    user.addToCook(recipe2)
    user.addToCook(recipe3)

    expect(user.filterToCook("sauce")).to.deep.equal([recipe3]);
  });
});
