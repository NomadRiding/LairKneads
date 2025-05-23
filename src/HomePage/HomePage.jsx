import React, { useEffect, useState } from "react"
import Slideshow from "../components/Slideshow"
import "./HomePage.css"
import HeroText from "../components/HeroText"
import Layout from "../components/Layout"
import TestimonialCarousel from "../components/Review"
import Countdown from "../components/Countdown"
import FlavorPicker from "../components/FlavorPicker"

function HomePage() {
  return (
    <Layout>
      <div className="home-page">
        <HeroText />
        <Slideshow />
      </div>
      <FlavorPicker />
      <Countdown />
      <TestimonialCarousel />
    </Layout>
  )
}

export default HomePage
