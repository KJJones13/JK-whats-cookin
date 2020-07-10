const Ingredient = require("../src/Ingredient");

class Recipes {
  constructor(data) {
    this.id = data.id;
    this.image = data.image;
    this.ingredients = data.ingredients;
    this.instructions = data.instructions;
    this.name = data.name;
    this.tags = data.tags;
  }
  getDirections() {
    return this.instructions;
  }
}

if (typeof module !== "undefined") {
  module.exports = Recipes;
}
