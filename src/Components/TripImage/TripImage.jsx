import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TripImage.css';

gsap.registerPlugin(ScrollTrigger);

const Card = ({ percentage, description, source }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div className="stat-box" ref={cardRef}>
      <h2 className="stat-percentage">{percentage}</h2>
      <p className="stat-description">{description}</p>
      <p className="stat-source">{source}</p>
    </div>
  );
};

const TripImage = () => {
  return (
    <div className="trip-image-container">
      <div className="content">
        <div className="left-text">
          <p>For a majority of travelers,<br />travel isn't just an<br />experience.</p>
          <p>It's an essential<br />part of their lives.</p>
        </div>
        <div className="cards-container">
          <Card 
            percentage="73%"
            description="of all travelers say travel is always and often a priority."
            source="¹Tripadvisor, The Experience of Travel, 2024"
          />
          <Card 
            percentage="85%"
            description="of travelers plan to spend the same or more on travel in 2024 compared to 2023."
            source="²Tripadvisor, Global Travel Outlook, 2024"
          />
          <Card 
            percentage="62%"
            description="of travelers are more likely to book with environmentally responsible travel providers."
            source="³Tripadvisor, Sustainable Travel Survey, 2024"
          />
          <Card 
            percentage="91%"
            description="of travelers read reviews before booking accommodations."
            source="⁴Tripadvisor, Trust in Reviews Study, 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default TripImage;
