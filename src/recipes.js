class Recipe {
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

  getCost() {
    var costCounter = 0;
    this.ingredients.forEach(ingredient => {
      let foundIngredient = this.findIngredient(ingredient.id);
      costCounter += foundIngredient.estimatedCostInCents;
    })
    this.totalCost = costCounter;
    return costCounter;
  }

  findIngredient(ingredientId) {
    let foundIngredient = ingredientData.find(ingredient => {
      return ingredient.id === ingredientId;
    });

    return foundIngredient;
  }

  convertIngredient() {
    this.ingredients.forEach(item => {
      let newIngredient = new Ingredient(this.findIngredient(item.id))
      return newIngredient;
    });
  }
}

// find the ingredient in the ingredientsData file
// that matches the id of the current ingredient
// instantiate the ingredient and give it the quantity
// from the current ingredient
if (typeof module !== "undefined") {
  module.exports = Recipe;
}
