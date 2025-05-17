import React, { useState } from "react"
import "./FlavorPicker.css"

export default function FlavorPicker() {
  const [flavorEntry, setFlavorEntry] = useState("") // Tracks the current input value
  const [flavors, setFlavors] = useState([]) // Stores the list of submitted flavors
  const [flavorLikes, setFlavorLikes] = useState(0) // Tracks the number of likes for each flavor
  const [userName, setUserName] = useState("") // Tracks the user's name

  const handleFlavorSubmit = () => {
    if (flavorEntry) {
      if (flavors.includes(flavorEntry)) {
        alert("Flavor is in the list, added a like") // Alert if the flavor already exists
        setFlavorLikes((prevLikes) => prevLikes + 1) // Increment the like count
      } else {
        setFlavors((prevFlavors) => [...prevFlavors, flavorEntry]) // Add the new flavor to the list
        setFlavorEntry("") // Clear the input field
      }
    } else {
      alert("Please enter a flavor") // Alert if the input is empty
    }
  }

  const handleClicks = () => {
    setFlavorLikes((prevLikes) => prevLikes + 1) // Increment the like count
  }

  return (
    <>
      <div className="flavorPickerContainer">
        <div className="FlavorLegend">
          <h2>Flavor Legend</h2>
          <ul>
            {flavors.map((flavor, index) => (
              <li key={index} className="flavorListItem">
                {flavor}
                <span className="likeCount">: {flavorLikes}</span>{" "}
                <button onClick={handleClicks}>Like</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="submitSection">
          <h1 className="flavorPickerTitle">Submit Your Flavor</h1>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="nameInput"
            placeholder="Enter your username here..."
          />
          <input
            value={flavorEntry}
            onChange={(e) => setFlavorEntry(e.target.value)}
            className="flavorInput"
            placeholder="Enter your flavor here..."
          />
          <button className="flavorSubmitButton" onClick={handleFlavorSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  )
}
