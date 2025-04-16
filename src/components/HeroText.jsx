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
        <p>Fresh. Weekly Drops. Gone Fast!</p>
      </div>
      <button onClick={handleOrderClick}>Order Now</button>
    </div>
  )
}

export default HeroText
