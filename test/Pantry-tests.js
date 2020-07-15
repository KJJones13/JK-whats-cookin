const chai = require("chai");
const expect = chai.expect;
const Pantry = require("../src/Pantry")

describe ("Pantry", function() {
  let pantry
  beforeEach(function () {
    pantry = new Pantry(
      [
        {
          "ingredient": 11477,
          "amount": 4
        },
        {
          "ingredient": 11297,
          "amount": 4
        },
        {
          "ingredient": 1082047,
          "amount": 10
        },
      ]
    )
  });

  it ("should be a function", function() {
    expect (Pantry).to.be.a("function");
  });

  it ("should be an instance of Pantry", function() {
    expect (pantry).to.be.an.instanceof(Pantry)
  });

  it ("should have a list of ingredients", function() {
    expect (pantry.ingredients.length).to.deep.equal(3)
  })
})
