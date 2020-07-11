const chai = require("chai");
const expect = chai.expect;
const Ingredient = require("../src/Ingredient");
const ingredientsData = require("../data/ingredients");

describe ("Ingredient", function() {
  let ingredient;
  beforeEach(function () {
    ingredient = new Ingredient(ingredientsData[0]);
  });

  it ("should be a function", function() {
    expect (Ingredient).to.be.a("function");
  });

  it ("should be an instance of Ingredient", function() {
    expect (ingredient).to.be.an.instanceof(Ingredient);
  });

  it ("should take in an ingredient object", function() {
    expect (ingredient.id).to.equal(20081);
  });
});
