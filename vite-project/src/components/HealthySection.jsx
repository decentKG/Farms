import React from 'react';
import '../styles/HealthySection.css'; // Ensure you create this CSS file for styling
import { FaQuestion } from 'react-icons/fa'; // For the small icon in the subtitle

// Placeholder Image - Replace this with your actual image path
import farmerImg from '../images/murungu.jpg'; 

const HealthySection = () => {
  return (
    <section className="about-section">
      <div className="container py-5">
        <div className="about-card-wrapper">
          <div className="row g-0">
            
            {/* Left Column: Image */}
            <div className="col-lg-6">
              <div className="image-container">
                <img 
                  src={farmerImg} 
                  alt="Farmer inspecting crops in a field" 
                  className="img-fluid about-image" 
                />
              </div>
            </div>

            {/* Right Column: Content and Stats */}
            <div className="col-lg-6">
              <div className="content-container">
                
                {/* Subtitle */}
                <div className="about-subtitle">
                  <FaQuestion className="subtitle-icon" />
                  <span>What We Do</span>
                </div>
                
                {/* Title and Text */}
                <h2 className="about-title">
                  Healthy life with fresh products
                </h2>
                <p className="about-text">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
                </p>

                {/* Stat Circles */}
                <div className="stats-row">
                  <div className="stat-item">
                    <div className="stat-circle">
                      <span className="stat-percent">90%</span>
                    </div>
                    <span className="stat-label">Eco Farms Worldwide</span>
                  </div>

                  <div className="stat-item">
                    <div className="stat-circle stat-circle-alt">
                      <span className="stat-percent">78%</span>
                    </div>
                    <span className="stat-label">Special Equipment</span>
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthySection;