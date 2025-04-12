import React from "react"
import { useEffect, useState } from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <nav>
      <h1 className="Logo-style logo">Lair Kneads</h1>
      <ul>
        <li>
          <Link to="/Order">Order</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <Link to="/profile">Profile</Link> // Show "Profile" if logged in
          ) : (
            <Link to="/login">LogIn</Link> // Show "LogIn" if not logged in
          )}
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
