import React from "react"
import { useEffect, useState } from "react"
import "./NavBar.css"

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <nav>
      <h1>Lair Kneads</h1>
      <ul>
        <li>
          <a href="#home">Order</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          {isLoggedIn ? (
            <a href="#profile">Profile</a> // Show "Profile" if logged in
          ) : (
            <a href="#login">LogIn</a> // Show "LogIn" if not logged in
          )}
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
