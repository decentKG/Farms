import React, { useState } from "react";
import "../styles/Hero.css";
import heroBg from "../images/hero.jpg";
import logo from "../images/logo.png";
import { FaSearch, FaPhoneAlt } from "react-icons/fa"; // ✅ Import Search + Phone Icons
import "../index.css";

const Hero = () => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  return (
    <section className="hero">
      {/* --- Navbar Section --- */}
      <nav className="navbar-container">
        <div className="navbar-main">
          <div className="navbar-logo">
            <img src={logo} alt="Agrimo logo" className="logo-image" />
          </div>

          <ul className="navbar-links">
            <li
              className="nav-item has-dropdown"
              onMouseEnter={() => setIsHomeDropdownOpen(true)}
              onMouseLeave={() => setIsHomeDropdownOpen(false)}
            >
              <a href="#home" className="nav-link nav-active">
                <span className="text-white group-hover:text-green-400">• </span>
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="#pages" className="nav-link">
                <span className="text-white group-hover:text-green-400">• </span>
                PAGES
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                <span className="text-white group-hover:text-green-400">• </span>
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <span className="text-white group-hover:text-green-400">• </span>
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="nav-link">
                <span className="text-white group-hover:text-green-400">•</span>
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <span className="text-white group-hover:text-green-400">•</span>
                CONTACT US
              </a>
            </li>
          </ul>
        </div>

        {/* Call-to-Action and Search/Menu Icons */}
        <div className="navbar-actions">
          <div className="navbar-contact">
            <FaPhoneAlt className="phone-icon" /> {/* ✅ Gold Phone Icon */}
            <div>
              <span className="contact-text">Call us Now</span>
              <span className="contact-number">+1 (212) 255-5111</span>
            </div>
          </div>

          <button className="navbar-search-btn">
            <FaSearch />
          </button>

          <div className="btn-gt">
            <button className="navbar-cta-btn">Get In Touch</button>
          </div>
        </div>
      </nav>
      {/* --- End Navbar Section --- */}

      {/* --- Hero Content Section --- */}
      <div className="hero-overlay">
        <div className="hero-content-container">
          <span className="hero-subtitle">BELIEVE IN QUALITY!</span>
          <h1 className="hero-title">
            Quality Trust: <br /> Direct to the Farm
          </h1>
          <p className="hero-text">
            We all need a little space to grow. Give yourself the space you need
            to find your inner you.
          </p>
          <a href="#contact" className="hero-btn">
            Contact Us &#8599;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
