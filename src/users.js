class Users {
  constructor() {
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addToFav(recipe) {
    this.favoriteRecipes.push(recipe)
  }

  removeFromFav(recipe) {
    this.favoriteRecipes.forEach((favRecipe) => {
      if (favRecipe === recipe) {
        this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(favRecipe), 1)
      }
    })
  }

  favoriteRecipe(recipe) {
    if (this.favoriteRecipes.includes(recipe)) {
      this.removeFromFav(recipe);
    } else {
      this.addToFav(recipe);
    }
  }

  addToCook(recipe) {
    this.recipesToCook.push(recipe);
  }

  filterFavRecipes(type) {
    const foundRecipes = this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(type)
    })

    return foundRecipes;
  }

  filterToCook(type) {
    const foundRecipes = this.recipesToCook.filter(recipe => {
      return recipe.tags.includes(type)
    })

    return foundRecipes;
  }
}

if (typeof module !== "undefined") {
  module.exports = Users;
}
