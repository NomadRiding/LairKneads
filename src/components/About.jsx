import React from "react"
import Layout from "./Layout"
import "./About.css"
import TipJar from "./TipJar.jsx"

function About() {
  return (
    <Layout>
      <div className="about-container">

      <h1>About Page</h1>
      <p>
        At <span>Lair Kneads</span>, we beleive that indulgence should be worth
        it. Born in a small kitchen and fueled by big dreams, Lair Kneads
        started as a weekend experiment to bake the perfect banana bread: rich,
        moist, a little nostalgic and totally irrisistible.
      </p>
      <p>
        We specialize in <span>limited weekly drops</span> of handcrafted banana
        bread that disappears fast (once you taste it, you'll get why). Each
        loaf is made with real ingredients, no shortcuts and a lot of heart -
        because you deserve better than dry slices from a plastic wrapper.
      </p>
      <p>
        Whether you're treating yourself, or grabbing a sweet gift for someone
        you love, this is the loaf your weekend kneads.
      </p>
      <br />
      <br />
      <TipJar />
      </div>
    </Layout>
  )
}

export default About
