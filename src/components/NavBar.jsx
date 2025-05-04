import React from "react"
import "./NavBar.css"

function NavBar() {
  return (
    <>
      <div className="NavBanner">
        <p>We are Veteran Owned and Operated!</p>
      </div>
      <nav>
        <div className="logo">Lair Kneads</div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
