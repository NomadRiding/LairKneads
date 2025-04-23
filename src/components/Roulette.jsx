import React, { useState } from "react"
import "./Roulette.css"

function Roulette() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [winner, setWinner] = useState(null)

  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Helen",
  ]

  const handleSpin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setWinner(null)

    // Randomly select a name
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
      {winner && <h2 className="winner-message">{`${winner} has won!`}</h2>}
      <div className="square">
        <div
          className={`name-container ${isSpinning ? "spinning" : ""}`}
          style={{ justifyContent: winner ? "center" : "flex-start" }}
        >
          {isSpinning
            ? [...names, ...names].map((name, index) => (
                <div key={index} className="name">
                  {name}
                </div>
              ))
            : winner && <div className="name winner-name">{winner}</div>}
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
  )
}

export default Roulette
