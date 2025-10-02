import React from 'react';
import '../styles/HistoryTimeline.css';

const timelineEvents = [
  {
    year: '1987',
    title: 'Open my Farm',
    description: 'Corrupti ut consequuntur magni minus lusto eos consectetur similique minus culpa odio temporibus.',
  },
  {
    year: '1995',
    title: 'Farm Remodelacion',
    description: 'Majority have suffered alteration in some form by injected humor culpa odio temporibus.',
  },
  {
    year: '2000',
    title: 'Grainfarmers Formed',
    description: 'Always parties but trying she shewing of moment minus Velit ratione hic corporis veritatis odit.',
  },
  {
    year: '1910',
    title: 'Start of Agriculture',
    description: 'Consequatur corrupti ut magni minus lusto eos consectetur similique minus culpa odio temporibus.',
  },
];

const HistoryTimeline = () => {
  return (
    <section className="timeline-section">
      <div className="container py-5">
        
        {/* Header Row */}
        <div className="row mb-5">
          <div className="col-lg-5 col-md-12">
            <p className="timeline-subtitle">Our History</p>
            <h2 className="timeline-header-title">Farming have been since 1866</h2>
          </div>
          <div className="col-lg-7 col-md-12 d-flex align-items-end">
            <p className="timeline-header-text">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even.
            </p>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="timeline-container">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <p className="timeline-year">{event.year}</p>
              <div className="timeline-line-point"></div>
              <p className="timeline-title">{event.title}</p>
              <p className="timeline-description">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;