import React from "react"
import "./Roulette.css" // Import the CSS file for styling

function Roulette() {
  const [spinResult, setSpinResult] = React.useState(null)
  const [isSpinning, setIsSpinning] = React.useState(false)
  const [spinAngle, setSpinAngle] = React.useState(0)

  const names = [
    { name: "Alice", style: { backgroundColor: "red" } },
    { name: "John", style: { backgroundColor: "purple" } },
    { name: "Sam", style: { backgroundColor: "blue" } },
    { name: "Kim", style: { backgroundColor: "green" } },
  ] // List of participants with styles

  const handleSpin = () => {
    if (isSpinning) return // Prevent multiple spins at the same time

    setIsSpinning(true)

    // Randomize spin angle
    const randomSpin = Math.floor(Math.random() * 360) + 720 // At least 2 full rotations
    const totalAngle = spinAngle + randomSpin

    setSpinAngle(totalAngle)

    // Determine the result after the spin
    setTimeout(() => {
      const normalizedAngle = totalAngle % 360 // Normalize the angle to 0-360 degrees
      const segmentAngle = 360 / names.length // Angle per segment
      const resultIndex = Math.floor(
        ((360 - normalizedAngle + segmentAngle / 2) % 360) / segmentAngle
      ) // Calculate the index
      setSpinResult(names[resultIndex].name) // Use the `name` property
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
      <div className="legend">
        <h3>Participants</h3>
        <ul>
          {names.map((participant, index) => (
            <li key={index}>{participant.name}</li>
          ))}
        </ul>
      </div>
      <div className="roulette-wrapper">
        <div
          className="roulette-wheel"
          style={{ transform: `rotate(${spinAngle}deg)` }}
        >
          {names.map((participant, index) => (
            <div
              key={index}
              className="wheel-segment"
              style={{
                transform: `rotate(${(360 / names.length) * index}deg)`,
                ...participant.style, // Apply the background color from the `style` property
              }}
            >
              <span
                style={{
                  transform: `rotate(-${(360 / names.length) * index}deg)`,
                }}
              >
                {participant.name}
              </span>
            </div>
          ))}
        </div>
        <div className="arrow"></div>
        <button
          className="spin-button"
          onClick={handleSpin}
          disabled={isSpinning}
        >
          Spin!
        </button>
      </div>
      {spinResult && <div className="result">{`Result: ${spinResult}`}</div>}
    </div>
  )
}

export default Roulette
