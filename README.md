# What's Cookin'?
Kyle Jones & Jake West, FE 2005

The details of this project are outlined in the <a href="https://frontend.turing.io/projects/whats-cookin.html" target="\__blank">project spec</a>.


## Description
JK What’s Cookin is a website that can generate a random user and recipes from a pre-existing database. Users can save recipes that they enjoy and search for recipes by name and type. Users can click on a recipe to see the required ingredients and instructions on how to make a recipe.

This project was a paired-programming project for Turing School of Software and Design’s Front-End-Engineering program in Mod 2 of the 2005 inning. The project utilizes JavaScript, HTML, and CSS files while using git and Github for branching and version control.

## Set Up 
Deployed site: https://kjjones13.github.io/JK-whats-cookin/

To install this app:
1. Clone the repo by running `git clone git@github.com:KJJones13/JK-whats-cookin.git <new directory name>`
2. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` to install project dependencies.
3. Run open index.html in the terminal to see the HTML page

## Functionality
1. On the home view, the user has access to a number of different recipes. When they click on a recipe name, a drop down opens showing the user the recipes ingredients and instructions.
![](assets/jkw-homepage.gif)
![](assets/jkw-homeview-dropdowns.gif)

2. Users can favorite ingredients by hitting the save button. If the user hits the save button a second time, the ingredient is removed from their favorite recipes list. On the favorites page, a user can click on any recipe to see the required ingredients & it's instructions.
![](assets/jkw-addFavorite.gif)
![](assets/jkw-removeFavorite.gif)
![](assets/jkw-favoritePopup.gif)

3. Users can search for recipes by name or by recipe tag (i.e., snack, hors d'oeuvre) and return ingredients that match the search query.
![](assets/jkw-search-pork.gif)

4. Users can also switch into the Users tab, which shows every user & their pantry. Currently, when the page loads, a random user's data is loaded into the site. Future iterations of this project include the ability to view the website from the perspective of a user of your choosing.
![](assets/jkw-User-view.gif)

## Next Directions

1. Build out a pantry for the user to see what they currently have in their pantry.

2. Allow the user to compare what they have in their pantry to a recipe that they would like to cook.

3. Create a way for the user to compare their ingredients to the ingredients required to cook a meal, that will generate a shopping list for them of ingredients they are missing.

## Contributors
This project represents the joint efforts of Kyle Jones and Jake West.
* Kyle Jones Github: https://github.com/KJJones13
* Jake West Github: https://github.com/jkwest-93
