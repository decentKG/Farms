import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/Testimonials.css';

// Placeholder Images
import clientImg1 from '../images/client1.jpg'; 
import clientImg2 from '../images/client2.jpg';
import clientImg3 from '../images/client3.jpg';

const testimonialData = [
  {
    id: 1,
    rating: 5,
    quote: '"I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!"',
    name: 'Martin Bailey',
    title: 'SUPERVISOR',
    img: clientImg1,
  },
  {
    id: 2,
    rating: 4,
    quote: '"I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!"',
    name: 'Emma Greed',
    title: 'CUSTOMER',
    img: clientImg2,
  },
  {
    id: 3,
    rating: 5,
    quote: '"I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. They are great to work with and are excellent trainers. Thank you all!"',
    name: 'Daniel Craig',
    title: 'CO-FOUNDER',
    img: clientImg3,
  },
];

// Helper component for rating stars
const RatingStars = ({ count }) => {
  return (
    <div className="rating-stars">
      {[...Array(count)].map((_, i) => (
        <FaStar key={i} className="star-icon" />
      ))}
    </div>
  );
};

// Placeholder component for the quote icon graphic
const QuoteIcon = () => (
    <span className="quote-icon-container">“</span>
);


const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container py-5">
        <div className="header-row">
          <div className="title-group">
            <p className="testimonial-subtitle">Testimonial</p>
            <h2 className="testimonial-title">What our customers say</h2>
          </div>
          <div className="navigation-buttons">
            <button className="nav-btn left">
              &lt;
            </button>
            <button className="nav-btn right">
              &gt;
            </button>
          </div>
        </div>

        <div className="row mt-4">
          {testimonialData.map((t) => (
            <div key={t.id} className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card">
                <QuoteIcon />
                <RatingStars count={t.rating} />
                <p className="testimonial-quote">{t.quote}</p>
                
                <div className="client-info">
                  <div className="client-image-wrapper">
                    <img src={t.img} alt={t.name} className="client-img" />
                  </div>
                  <div className="client-details">
                    <p className="client-name">{t.name}</p>
                    <p className="client-title">{t.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;