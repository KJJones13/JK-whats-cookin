const chai = require("chai");
const expect = chai.expect;
const Recipes = require("../src/recipes");
const recipeData = require("../data/recipes");
const ingredientData = require("../data/ingredients");

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
});
