import React from "react"
import { useNavigate } from "react-router-dom" // Import useNavigate
import "./HeroText.css"

function HeroText() {
  const navigate = useNavigate() // Initialize useNavigate

  const handleOrderClick = () => {
    navigate("/Order") // Navigate to the Order page
  }

  return (
    <div className="hero-text-container">
      <div className="hero-text">
        <h1>
          Welcome to <span className="Logo-style">Lair Kneads</span>
        </h1>
        <p>Your one-stop shop for delicious baked goods!</p>
      </div>
      <button onClick={handleOrderClick}>Order</button> {/* Add onClick */}
    </div>
  )
}

export default HeroText
