import React, { useState } from "react"
import "./FlavorPicker.css"
import TiktokLogo from "../assets/TiktokBlack.png"
import InstagramLogo from "../assets/InstagramBlack.png"

export default function FlavorPicker() {
  const [flavorEntry, setFlavorEntry] = useState("") // Tracks the current input value
  const [flavors, setFlavors] = useState([]) // Stores the list of submitted flavors
  const [flavorLikes, setFlavorLikes] = useState(0) // Tracks the number of likes for each flavor
  const [userName, setUserName] = useState("") // Tracks the user's name
  const [socialLocation, setSocialLocation] = useState("") // Tracks the social media location
  const [iconSize, setIconSize] = useState(50) // Sets the size of the icons
  const [hovered, setHovered] = useState(false) // Tracks if the icon is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleFlavorSubmit = () => {
    if (flavorEntry && userName && socialLocation) {
      if (flavors.some((flavor) => flavor.name === flavorEntry)) {
        alert("Flavor is already in the list!") // Alert if the flavor already exists
      } else {
        setFlavors((prevFlavors) => [
          ...prevFlavors,
          {
            name: flavorEntry,
            user: userName,
            platform: socialLocation,
            likes: 0,
          },
        ]) // Add the new flavor with user and platform
        setFlavorEntry("") // Clear the input field
        setUserName("") // Clear the username field
        setSocialLocation("") // Clear the social location
      }
    } else {
      alert("Please fill out all fields!") // Alert if any input is empty
    }
  }

  const formatLikes = (likes) => {
    if (likes >= 1000000) {
      return `${(likes / 1000000).toFixed(1)}M` // Format likes in millions
    } else if (likes >= 1000) {
      return `${(likes / 1000).toFixed(1)}k` // Format likes in thousands
    }
    return likes.toString() // Return likes as a string
  }

  const handleClicks = (index) => {
    setFlavors((prevFlavors) =>
      prevFlavors.map((flavor, i) =>
        i === index
          ? { ...flavor, likes: flavor.likes + 1 } // Increment the like count for the clicked flavor
          : flavor
      )
    )
  }

  const getPlatformIcon = (platform) => {
    if (platform === "tiktok") return TiktokLogo
    if (platform === "instagram") return InstagramLogo
    return null
  }

  return (
    <>
      <div className="flavorPickerContainer">
        <div className="FlavorLegend">
          <h2>Flavor Legend</h2>
          <ul>
            {flavors.map((flavor, index) => (
              <li key={index} className="flavorListItem">
                {flavor.platform && (
                  <img
                    src={getPlatformIcon(flavor.platform)}
                    alt={flavor.platform}
                    className="platformIcon"
                    style={{ width: 20, height: 20 }}
                  />
                )}
                {flavor.user} : {flavor.name}{" "}
                <span
                  className="likeCount"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {hoveredIndex === index
                    ? flavor.likes
                    : formatLikes(flavor.likes)}
                </span>{" "}
                <button className="likeButton" onClick={() => handleClicks(index)}>Like</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="submitSection">
          <h1 className="flavorPickerTitle">Submit Your Flavor</h1>
          <div className="socialSelection">
            <label>
              <input
                type="radio"
                value="tiktok"
                checked={socialLocation === "tiktok"}
                onChange={(e) => setSocialLocation(e.target.value)}
              />
              TikTok
            </label>
            <label>
              <input
                type="radio"
                value="instagram"
                checked={socialLocation === "instagram"}
                onChange={(e) => setSocialLocation(e.target.value)}
              />
              Instagram
            </label>
          </div>
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
