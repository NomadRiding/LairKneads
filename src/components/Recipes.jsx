import React from "react"
import Layout from "./Layout"

function Recipes() {
  return (
    <Layout>
      <div className="recipes-page">
        <h1>Recipes</h1>
        <div className="recipe-list">
          <div className="recipe-item">
            <h2>Banana Bread</h2>
            <p>
              Ingredients: Bananas, flour, sugar, eggs, butter, baking soda.
            </p>
            <p>
              Instructions: Mix ingredients, pour into a loaf pan, bake at 350°F
              for 60 minutes.
            </p>
          </div>
          <div className="recipe-item">
            <h2>Chocolate Chip Banana Bread</h2>
            <p>
              Ingredients: Bananas, flour, sugar, eggs, butter, baking soda,
              chocolate chips.
            </p>
            <p>
              Instructions: Mix ingredients, pour into a loaf pan, bake at 350°F
              for 60 minutes.
            </p>
          </div>
          {/* Add more recipes as needed */}
        </div>
      </div>
    </Layout>
  )
}

export default Recipes
