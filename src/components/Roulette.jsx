import React, { useState } from "react"
import "./Roulette.css"
import Tiktok from "../assets/TiktokBlack.png" // Correctly imported Tiktok image
import Instagram from "../assets/InstagramBlack.png" // Correctly imported Instagram image

function Roulette() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [winner, setWinner] = useState(null)

  const [names, setNames] = useState([
    {
      location: (
        <img src={Tiktok} alt="Tiktok" className="social-icons" />
      ), // Use the imported Tiktok image
      name: "@username",
      flavor: "Vanilla",
    },
    {
      location: (
        <img src={Instagram} alt="Instagram" className="social-icons" />
      ), // Use the imported Instagram image
      name: "@usernamePerson",
      flavor: "Chocolate",
    },
    {
      location: (
        <img src={Tiktok} alt="Tiktok" className="social-icons" />
      ), // Use the imported Tiktok image
      name: "@thirdusername",
      flavor: "Strawberry",
    },
  ])

  const handleSpin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setWinner(null)

    const randomIndex = Math.floor(Math.random() * names.length)
    const chosenName = names[randomIndex]

    // Spin animation duration
    setTimeout(() => {
      setIsSpinning(false)
      setWinner(chosenName)
    }, 3000) // Spin duration
  }

  return (
    <div className="spinner-container">
      {winner && (
        <div className="winner-message-container">
          <h2 className="winner-message">
            {`Next episode will have ${winner.flavor}`}{" "}
          </h2>
          <h2 className="winner-message">
            {`Submitted by `}
            {winner.location} {winner.name}!
          </h2>
        </div>
      )}
      <div className="containBox">
        <div className="legend">
          <h2>Submitted</h2>
          {names.map((entry, index) => (
            <div key={index} className="nameList">
              {entry.location} {entry.name} - {entry.flavor}
            </div>
          ))}
        </div>
        <div className="roulette-container">
          <div className="square">
            <div
              className={`name-container ${isSpinning ? "spinning" : ""}`}
              style={{ justifyContent: winner ? "center" : "flex-start" }}
            >
              {isSpinning
                ? [...names, ...names].map((entry, index) => (
                    <div key={index} className="name">
                      {entry.name}
                    </div>
                  ))
                : winner && (
                    <div className="name winner-name">{winner.name}</div>
                  )}
            </div>
          </div>
          <button
            onClick={handleSpin}
            className="spin-button"
            disabled={isSpinning}
          >
            Spin
          </button>
        </div>
      </div>
    </div>
  )
}

export default Roulette
