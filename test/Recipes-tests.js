const chai = require("chai");
const expect = chai.expect;
const Recipes = require("../src/recipes");
const Ingredient = require("../src/Ingredient");
const recipeData = require("../data/recipes");

describe ("Recipes", function() {
 let testData, recipe;
  beforeEach(function () {
    testData = recipeData[0];
    recipe = new Recipes(testData);
  });

  it ("should be a function", function() {
    expect (Recipes).to.be.a("function");
  });

  it ("should be an instance of Recipes", function() {
    expect (recipe).to.be.an.instanceof(Recipes);
  });

  it ("should have a list of instructions", function() {
    expect (recipe.instructions.length).to.equal(6);
  });

  it ("should return the directions", function() {
    recipe.getDirections();
    expect (recipe.getDirections()[0].number).to.equal(1);
  });

  it ("should be able to calculate the cost ", function() {
    recipe.getCost();
    expect (recipe.totalCost).to.equal(5921);
  });

  it ("should have a list of ingredients where each element is an instance of Ingredient", function() {
    recipe.convertIngredient();
    expect (recipe.ingredients[0]).to.be.an.instanceof(Ingredient);
  });
});
