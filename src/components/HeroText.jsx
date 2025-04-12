import React from "react"
import "./HeroText.css"

function HeroText() {
  return (
    <div className="hero-text-container">
      <div className="hero-text">
        <h1>Welcome to <span className="Logo-style">Lair Kneads</span></h1>
        <p>Your one-stop shop for delicious baked goods!</p>
      </div>
      <button>Order</button>
    </div>
  )
}

export default HeroText
