import React from "react"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Lair Kneads. All rights reserved.</p>
        <p>Follow us on:</p>
        <ul className="social-media-links">
          <li>
            <a href="#">
              <img href="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/ac81c6976bf1467aa641072c6fef166f/tiktokblackiconlogocf54f85379seeklogocom.png"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img href="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/ac81c6976bf1467aa641072c6fef166f/instagramnew2016glyphlogo84cb825424seeklogocom.png"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img href="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/ac81c6976bf1467aa641072c6fef166f/xlogoblack.png"></img>
            </a>
          </li>
        </ul>
        <p className="disclaimer">
          *Lair Kneads is a Cottage Food Operation all products are homemade and
          not subject to Routine Government Food Safety Inspections{" "}
        </p>
      </div>
    </footer>
  )
}

export default Footer
