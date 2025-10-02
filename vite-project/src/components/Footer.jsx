import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// Logo and Placeholder Decorative Images - Replace with your actual assets
import logo from '../images/logo.svg.png'; 
import grainBgLeft from '../images/footer1.png';
import grainBgRight from '../images/footer1.png';

const Footer = () => {
  return (
    <footer className="agr-footer-wrapper">
      
      {/* Top Bar (Yellow) */}
      <div className="agr-footer-top-bar">
        <div className="container agr-footer-top-inner">
          <div className="agr-top-nav">
            <a href="#farmers">FARMERS</a>
            <a href="#organic">ORGANIC</a>
            <a href="#foods">FOODS</a>
            <a href="#product">PRODUCT</a>
          </div>
          <div className="agr-top-contact-group">
            <div className="agr-contact-info">
              <FaPhoneAlt className="agr-contact-icon" />
              <span>+1 (212) 255-5111</span>
            </div>
            <div className="agr-contact-info">
              <FaEnvelope className="agr-contact-icon" />
              <span>changed@technologies.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="agr-footer-main-area">
        {/* Decorative Image Left */}
        <img src={grainBgLeft} alt="Decorative Grain Stalk" className="agr-decorative-img agr-img-left" />
        
        <div className="container">
          <div className="row">

            {/* Column 1: Logo and Description */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="agr-logo-section">
                <img src={logo} alt="Agrimo logo" className="agr-logo-image" />
                {/* <span className="logo-text">grimo</span> */}
              </div>
              <p className="agr-brand-description">
                Mauris sed molestiae sent. Sed vel vestibulum elit, non accusamus reus. In vitae sapien viverra est. Duo et illum nare senserit.
              </p>
              <div className="agr-social-links">
                <a href="#facebook" className="agr-social-btn"><FaFacebookF /></a>
                <a href="#twitter" className="agr-social-btn"><FaTwitter /></a>
                <a href="#linkedin" className="agr-social-btn"><FaLinkedinIn /></a>
                <a href="#instagram" className="agr-social-btn"><FaInstagram /></a>
              </div>
            </div>
            
            {/* Column 2, 3, 4 are grouped here to preserve Bootstrap columns */}
            <div className="col-lg-8 col-md-6">
                <div className="row">
                    {/* Column 2: Useful Links */}
                    <div className="col-lg-4 col-md-6 mb-4">
                      <h5 className="agr-footer-title">Useful Link</h5>
                      <ul className="agr-links-list">
                        <li><a href="#company">Company</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                      </ul>
                    </div>

                    {/* Column 3: Working Time */}
                    <div className="col-lg-4 col-md-6 mb-4">
                      <h5 className="agr-footer-title">Working Time</h5>
                      <p>Mon - Fri: 9:00am - 5:00pm</p>
                      <p>Saturday: 10:00am - 8:00pm</p>
                      <p>Sunday Closed</p>
                    </div>

                    {/* Column 4: Our Address */}
                    <div className="col-lg-4 col-md-6 mb-4">
                      <h5 className="agr-footer-title">Our Address</h5>
                      <p>Old Peabody 25B, New York, 11001, United States</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Image Right */}
        <img src={grainBgRight} alt="Decorative Wheat" className="agr-decorative-img agr-img-right" />
      </div>

      {/* Copyright Bar */}
      <div className="agr-copyright-bar">
        <div className="container agr-copyright-content">
          <div className="agr-legal-links">
            <a href="#terms">Terms & Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <p className="agr-copyright-text">Copyright © 2024 Agrimo. All Rights Reserved.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;