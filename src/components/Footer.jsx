import React from "react"
import "./Footer.css"
import Instagram from "../assets/InstagramBlack.png"
import XLogo from "../assets/xlogoblack.png"
import Tiktok from "../assets/TiktokBlack.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Lair Kneads. All rights reserved.</p>
        <p>Follow us on:</p>
        <ul className="social-media-links">
          <li>
            <a
              href="https://www.instagram.com/lair_kneads"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={XLogo} alt="Twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Tiktok} alt="TikTok" />
            </a>
          </li>
        </ul>
        <p className="disclaimer">
          *Lair Kneads is a Cottage Food Operation. All products are homemade
          and not subject to routine government food safety inspections.
        </p>
      </div>
    </footer>
  )
}

export default Footer
