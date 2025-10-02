import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "../styles/ServicesSection.css";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";

const ServicesSection = () => {
  const services = [
    {
      category: "FERTILIZER",
      title: "Harvest Concepts",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      img: card1,
    },
    {
      category: "FRUITS",
      title: "Farming Products",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      img: card2,
    },
    {
      category: "FERTILIZER",
      title: "Soil Fertilization",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      img: card3,
    },
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-badge">Our Services</span>
        <h2 className="services-title">Best Agriculture Services</h2>
        <div className="services-nav">
          <button className="nav-btn" aria-label="Previous">&#8249;</button>
          <button className="nav-btn" aria-label="Next">&#8250;</button>
        </div>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <article className="service-card" key={index}>
            <div className="service-image-wrap">
              <img src={service.img} alt={service.title} className="service-image" />
            </div>
            <div className="service-content">
              <span className="service-category">
                <span className="dot" /> {service.category}
              </span>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
            <button className="service-corner-btn" aria-label="Open service details">
              <FiArrowUpRight />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
