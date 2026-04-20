import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="swiggy-footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h1>Swiggy</h1>
          <p>© 2026 Swiggy Limited</p>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Cities Section */}
      <div className="footer-cities">
        <h3>Available in</h3>
        <div className="cities-grid">
          {[
            "Delhi",
            "Mumbai",
            "Bangalore",
            "Hyderabad",
            "Chennai",
            "Kolkata",
            "Pune",
            "Gurgaon",
            "Noida",
            "Ahmedabad",
            "Jaipur",
            "Chandigarh",
            "Lucknow",
            "Indore",
            "Nagpur",
            "Surat",
          ].map((city, index) => (
            <span key={index}>{city}</span>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="footer-bottom">
        <p>For better experience, download the Swiggy app now</p>

        <div className="app-buttons">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="playstore"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="appstore"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
