import React from "react"
import "./TipJar.css" // Import your CSS file for styling

function TipJar() {
  return (
    <div className="tip-jar-container">
      <h2>Tip Jar</h2>
      <p>Want to leave a tip, donate or support the hustle beyond the bread?</p>
      <p>We've got a virtual tip jar below - no crumbs, just love.</p>
      <br />
      <a
        href="https://www.venmo.com/nomadriding"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="tip-jar-button">We Knead the Dough</button>
      </a>
    </div>
  )
}

export default TipJar
