import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaWarehouse, FaTruck, FaQuoteRight } from "react-icons/fa"; 
import '../styles/AboutSection.css'; 
import "../index.css";
import farmerImage from '../images/munhu.jpg'; 

const AboutUsSection = () => {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const target = 435; // final count
    const duration = 1500; // animation duration in ms

    const animate = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const value = Math.floor(progress * target);
        setCount(value);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    // Custom background class and padding
    <section className="about-section-bg py-5">
      <div className="container py-4">
        <div className="row align-items-center">

          {/* === LEFT COLUMN: Image and Counter Card === */}
          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            
            {/* Main Image Card with custom styling (rounded corners) */}
            <div className="main-image-card rounded-5 overflow-hidden shadow-sm">
              <img 
                src={farmerImage} // Placeholder image source
                alt="Smiling farmer tending to an orange tree"
                className="img-fluid"
              />
            </div>
            
            {/* Yellow Counter Card (positioned absolutely) */}
            <div ref={counterRef} className="counter-card p-3 text-center rounded-4 position-absolute">
              <h2 className="display-4 fw-bold m-0">{count}+</h2>
              <p className="text-uppercase fw-normal m-0 counter-text">
                Growth Tons of Harvest
              </p>
            </div>
          </div>
          {/* === END LEFT COLUMN === */}

          {/* === RIGHT COLUMN: Content and Features === */}
          <div className="col-lg-6 ps-lg-5">
            
            {/* Small 'Who We Are' pill */}
            <span className="info-badge text-uppercase mb-3">
              <FaQuoteRight className="me-2" /> Who We Are
            </span>

            {/* Main Heading */}
            <h2 className="display-6 fw-bold mb-4 main-heading">
              Currently we are growing and selling organic food
            </h2>

            {/* Body Text */}
            <p className="text-muted mb-5 body-text">
              There are many variations of passages of Lorem Ipsum available, but the majority 
              have suffered alteration in some form, by injected humour or randomised words 
              which don't look even.
            </p>

            {/* Feature Icons/Text (Two-column sub-layout) */}
            <div className="row">
              
              {/* Feature 1 */}
              <div className="col-md-6 mb-4">
                <div className="d-flex align-items-start feature-item">
                  <FaWarehouse size={32} className="me-3 feature-icon" />
                  <div>
                    <h5 className="fw-bold m-0 feature-title">Eco Farms Worldwide</h5>
                    <p className="text-muted mt-2 mb-0 feature-desc">
                      There are many variations of passages of lorem ipsum available.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-md-6 mb-4">
                <div className="d-flex align-items-start feature-item">
                  <FaTruck size={32} className="me-3 feature-icon" />
                  <div>
                    <h5 className="fw-bold m-0 feature-title">Special Equipment</h5>
                    <p className="text-muted mt-2 mb-0 feature-desc">
                      There are many variations of passages of lorem ipsum available.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* === END RIGHT COLUMN === */}

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;