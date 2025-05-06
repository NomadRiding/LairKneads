import React from "react"
import Layout from "./Layout"
import "./FAQ.css"

function FAQ() {
  return (
    <Layout>
      <div className="faq-page">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-item">
          <h2>What is Lair Kneads?</h2>
          <p>
            Lair Kneads is a bakery specializing in artisan breads and pastries.
          </p>
        </div>
        <div className="faq-item">
          <h2>Where are you located?</h2>
          <p>We are located just South of Oleta Park in North Miami.</p>
        </div>
        <div className="faq-item">
          <h2>What are your hours of operation?</h2>
          <p>
            At this time, we only operate on the weekends, we offer pick-up and
            delivery options
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default FAQ
