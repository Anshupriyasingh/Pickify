import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const [language, setLanguage] = useState("English");
  const [country, setCountry] = useState("India");

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to change language
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    console.log(`Language changed to: ${newLanguage}`);
  };

  // Function to change country
  const changeCountry = (newCountry) => {
    setCountry(newCountry);
    console.log(`Country changed to: ${newCountry}`);
  };

  return (
    <footer className="footer">
      <div className="footer-top" onClick={scrollToTop} style={{ cursor: "pointer" }}>
        <p>Back to top</p>
      </div>

      <div className="footer-container">
        <div className="footer-section">
          <h4>Get to Know Us</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/policy">Policy</Link>
        </div>

        <div className="footer-section">
          <h4>Connect with Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        <div className="footer-section">
          <h4>Let Us Help You</h4>
          <Link to="/account">Your Account</Link>
          <Link to="/safety">Safety Alerts</Link>
          <Link to="/help">Help</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YourCompany. All Rights Reserved.</p>
        <div className="footer-lang">
          <button onClick={() => changeLanguage("English")}>{language} 🌐</button>
          <button onClick={() => changeCountry("India")}>{country} 🇮🇳</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
