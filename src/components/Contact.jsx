import React from "react"
import Layout from "./Layout"

function Contact() {
  return (
    <Layout>
      <div className="contact-page">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: info@lair kneads.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
