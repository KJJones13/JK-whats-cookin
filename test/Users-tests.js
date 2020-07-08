const chai = require("chai");
const expect = chai.expect;
const Users = require("../src/users");

describe ("Users", function() {
  let user, recipe;
  beforeEach(function () {
    //Describe variables used in test here!
    user = new Users();
    recipe1 = {
      "id": 595736,
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    }
    recipe2 = {
      "id": 678353,
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    }
    recipe3 = {
      "id": 412309,
      "tags": [
        "sauce"
      ]
    }
  });

  it ("should be a function", function() {
    expect (Users).to.be.a("function");
  });

  it ("should be an instance of Users", function() {
    expect (user).to.be.an.instanceof(Users)
  });

  it ("should start with an empty favorites list", function() {
    expect (user.favoriteRecipes).to.deep.equal([])
  })

  it ("should be able to add favorite recipes to a list", function() {
    //1

    //2

    //3
    expect(user.addRecipe())
  })
})
