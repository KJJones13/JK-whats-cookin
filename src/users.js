class Users {
  constructor() {
    this.favoriteRecipes = [];
  }

  addRecipe(recipe) {
    this.favoriteRecipes.push(recipe)
  }

  removeRecipe(recipe) {
    this.favoriteRecipes.forEach((favRecipe) => {
      if (favRecipe === recipe) {
        this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(favRecipe), 1)
      }
    })
  }

  favoriteRecipe(recipe) {
    if (this.favoriteRecipes.includes(recipe)) {
      this.removeRecipe(recipe);
    } else {
      this.addRecipe(recipe);
    }
  }
}

if (typeof module !== "undefined") {
  module.exports = Users;
}
