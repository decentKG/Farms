import React, { useState } from "react";
import "../styles/Hero.css";
import heroBg from "../images/hero.jpg";
import logo from "../images/logo.png";

const Hero = () => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* --- Navbar Section --- */}
      <nav className="navbar-container">
        {/* Logo and Navigation Links */}
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
              <a href="#home" className="nav-link nav-active">HOME</a>
              {isHomeDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="#home1" className="dropdown-item">HOME 1</a>
                  <a href="#home2" className="dropdown-item">HOME 2</a>
                  <a href="#home3" className="dropdown-item">HOME 3</a>
                </div>
              )}
            </li>
            <li className="nav-item"><a href="#pages" className="nav-link">PAGES</a></li>
            <li className="nav-item"><a href="#services" className="nav-link">SERVICES</a></li>
            <li className="nav-item"><a href="#portfolio" className="nav-link">PORTFOLIO</a></li>
            <li className="nav-item"><a href="#blog" className="nav-link">BLOG</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">CONTACT US</a></li>
          </ul>
        </div>

        {/* Call-to-Action and Search/Menu Icons */}
        <div className="navbar-actions">
          <div className="navbar-contact">
            <span className="contact-text">Call us Now</span>
            <span className="contact-number">+1 (212) 255-5111</span>
          </div>
          
          <button className="navbar-search-btn">
            {/* Magnifying Glass Icon inside the styled button */}
            &#x1F50D; 
          </button>
          
          <a href="#contact" className="navbar-cta-btn">
            Get in Touch 
            &rarr; 
          </a>
        </div>
      </nav>
      {/* --- End Navbar Section --- */}

      {/* --- Hero Content Section --- */}
      <div className="hero-overlay"> 
        <div className="hero-content-container">
          <span className="hero-subtitle">BELIEVE IN QUALITY</span>
          <h1 className="hero-title">
            Quality Trust: <br /> Direct to the Farm
          </h1>
          <p className="hero-text">
            We all need a little space to grow. Give yourself the space you need
            to find your inner you.
          </p>
          <a href="#contact" className="hero-btn">
            Contact Us 
            &#8599; 
          </a>
        </div>
      </div>
      {/* --- End Hero Content Section --- */}

    </section>
  );
};

export default Hero;