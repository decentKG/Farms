import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSeedling, FaCarrot, FaLeaf, FaHandsHelping } from 'react-icons/fa'; // Example React Icons
import chibage from '../images/chibage.png';
import '../styles/ProductCategories.css'; // Custom CSS for this component


const ProductCategories = () => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: '#f8f9fa', paddingLeft: '116px', paddingRight: '116px' }}
    >
      {/* Header */}
      <div className="container text-center mb-5">
        <p className="text-muted mb-2">
          <FaSeedling className="me-2" style={{ color: '#88b259' }} /> Grow Naturally
        </p>
        <h2 className="display-5 fw-bold mb-4" style={{ color: '#343a40' }}>
          Choose What's Perfect <br /> For Your Field
        </h2>
      </div>

      {/* Content */}
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left Column of Features */}
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-4">
              <div className="icon-wrapper me-3">
                <FaHandsHelping className="category-icon" />
              </div>
              <div>
                <h5 className="fw-bold" style={{ color: '#343a40' }}>Agriculture Products</h5>
                <p className="text-muted mb-0">Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4">
              <div className="icon-wrapper me-3">
                <FaLeaf className="category-icon" />
              </div>
              <div>
                <h5 className="fw-bold" style={{ color: '#343a40' }}>Quality Products</h5>
                <p className="text-muted mb-0">Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</p>
              </div>
            </div>
          </div>

          {/* Central Image Column */}
          <div className="col-md-4 text-center d-none d-md-block">
            <img
              src={chibage}
              alt="Chibage Illustration"
              className="img-fluid"
              style={{ maxHeight: '560px', width: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Right Column of Features */}
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-4 justify-content-md-start justify-content-lg-end">
              <div className="icon-wrapper me-3">
                <FaCarrot className="category-icon" />
              </div>
              <div>
                <h5 className="fw-bold" style={{ color: '#343a40' }}>Fresh Vegetables</h5>
                <p className="text-muted mb-0">Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4 justify-content-md-start justify-content-lg-end">
              <div className="icon-wrapper me-3">
                <FaLeaf className="category-icon" />
              </div>
              <div>
                <h5 className="fw-bold" style={{ color: '#343a40' }}>Pure & Organic</h5>
                <p className="text-muted mb-0">Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;