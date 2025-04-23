import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Order from "./components/Order"
import About from "./components/About"
import Contact from "./components/Contact"
import Profile from "./components/Profile"
import Login from "./components/Login"
import HomePage from "./HomePage/HomePage"
import Recipes from "./components/Recipes"

function App() {
  return (
    <Routes>
      <Route path="/Order" element={<Order />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/Recipes" element={<Recipes />} />
    </Routes>
  )
}

export default App
