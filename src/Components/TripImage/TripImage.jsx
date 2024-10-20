import React from 'react';
import './TripImage.css';

const TripImage = () => {
  return (
    <div className="trip-image-container">
      <div className="content">
        <div className="left-text">
          <p>For a majority of travelers,<br />travel isn't just an<br />experience.</p>
          <p>It's an essential<br />part of their lives.</p>
        </div>
        <div className="stat-box">
          <h2 className="stat-percentage">73%</h2>
          <p className="stat-description">of all travelers say travel is always and often a priority.<sup>1</sup></p>
          <p className="stat-source"><sup>1</sup>Tripadvisor, The Experience of Travel, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default TripImage;
