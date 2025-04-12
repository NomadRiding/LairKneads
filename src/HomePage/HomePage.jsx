import React, { useEffect, useState } from "react"
import Slideshow from "../components/Slideshow"
import "./HomePage.css"
import HeroText from "../components/HeroText"
import Layout from "../components/Layout"
import Review from "../components/Review"

function HomePage() {
  return (
    <Layout>
      <div className="home-page">
        <HeroText />
        <Slideshow />
      </div>
      <Review />
    </Layout>
  )
}

export default HomePage
