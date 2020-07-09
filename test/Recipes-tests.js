const chai = require("chai");
const expect = chai.expect;
const Recipes = require("../src/recipes");

describe ("Recipes", function() {

  beforeEach(function () {
    recipe = new Recipes();
  });

  it ("should be a function", function() {
    expect (Recipes).to.be.a("function");
  });

  it ("should be an instance of Recipes", function() {
    expect (recipe).to.be.an.instanceof(Recipes)
  });
});
