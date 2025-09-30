import React from "react";
import { FaTractor, FaLeaf, FaSeedling, FaCheckCircle } from "react-icons/fa"; 
import "../styles/FeatureSection.css";

// Feature Data with React Icons
const features = [
  {
    id: 1,
    title: "Professional Farmers",
    description: "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    icon: <FaTractor />,
    link: "/farmers",
  },
  {
    id: 2,
    title: "Fresh Vegetables",
    description: "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    icon: <FaLeaf />,
    link: "/vegetables",
  },
  {
    id: 3,
    title: "Agriculture Products",
    description: "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    icon: <FaSeedling />,
    link: "/products",
  },
  {
    id: 4,
    title: "100% Guaranteed",
    description: "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    icon: <FaCheckCircle />,
    link: "/guarantee",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      {features.map((feature) => (
        <div className="feature-card" key={feature.id}>
          {/* Icon Circle */}
          <div className="icon-circle">
            <span className="icon">{feature.icon}</span>
          </div>

          {/* Content */}
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>

          {/* Decorative Corner/Link */}
          <a
            href={feature.link}
            className="feature-link"
            aria-label={`Learn more about ${feature.title}`}
          >
            <span className="arrow-icon"></span>
          </a>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
