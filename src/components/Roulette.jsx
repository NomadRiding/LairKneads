import React from "react"
import "./Roulette.css" // Import the CSS file for styling

function Roulette() {
  const [spinResult, setSpinResult] = React.useState(null)
  const [isSpinning, setIsSpinning] = React.useState(false)
  const [spinAngle, setSpinAngle] = React.useState(0)

  const names = [
    "Zero",
    "Tony",
    "Jason",
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Eve",
    "Frank",
    "Grace",
    "Hank",
    "Ivy",
    "Jack",
    "Karen",
    "Leo",
    "Mona",
    "Nina",
    "Oscar",
    "Paul",
    "Quinn",
    "Rachel",
    "Steve",
    "Tina",
    "Uma",
    "Victor",
    "Wendy",
    "Xander",
    "Yara",
    "Zane",
    "Amy",
    "Brian",
    "Cathy",
    "David",
    "Ella",
    "Fiona",
  ]

  const handleSpin = () => {
    if (isSpinning) return // Prevent multiple spins at the same time

    setIsSpinning(true)

    // Randomize spin angle
    const randomSpin = Math.floor(Math.random() * 360) + 720 // At least 2 full rotations
    setSpinAngle((prevAngle) => prevAngle + randomSpin)

    // Determine the result after the spin
    setTimeout(() => {
      const resultIndex = Math.floor(
        ((spinAngle + randomSpin) % 360) / (360 / names.length)
      )
      setSpinResult(names[resultIndex])
      setIsSpinning(false)
    }, 3000) // Spin duration in milliseconds
  }

  return (
    <div className="roulette-container">
      <h1>Roulette</h1>
      <p className="Roulette-Details">
        Welcome to the Roulette game! Spin the wheel and see where it lands.
        Good luck!
      </p>
      <div className="roulette-wheel">
        <div className="wheel" style={{ transform: `rotate(${spinAngle}deg)` }}>
          {names.map((name, index) => (
            <div key={index} className={`number number-${index}`}>
              {name}
            </div>
          ))}
        </div>
        {spinResult && <div className="result">{`Result: ${spinResult}`}</div>}
      </div>
      <button
        className="spin-button"
        onClick={handleSpin}
        disabled={isSpinning}
      >
        Spin the Wheel!
      </button>
    </div>
  )
}

export default Roulette
