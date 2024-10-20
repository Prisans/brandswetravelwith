import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Dreaming.css';

gsap.registerPlugin(ScrollTrigger);

const Dreaming = () => {
  const dreamingRef = useRef(null);

  useEffect(() => {
    const element = dreamingRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          end: 'bottom top+=100',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div className="dreaming-container">
      <div className="dreaming-content" ref={dreamingRef}>
        <h1 className="dreaming-title">Dreaming</h1>
      </div>
    </div>
  );
};

export default Dreaming;
