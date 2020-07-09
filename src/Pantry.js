class Pantry {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }
}

if (typeof module !== "undefined") {
  module.exports = Pantry;
}
