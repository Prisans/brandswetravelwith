import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Home.css';

const AnimatedShapes = () => {
  const shapesRef = useRef([]);

  useEffect(() => {
    shapesRef.current.forEach((shape, index) => {
      gsap.to(shape, {
        x: "random(-40, 40, 5)",
        y: "random(-40, 40, 5)",
        rotation: "random(-25, 25)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.05
      });
    });
  }, []);

  return (
    <div className="animated-shapes">
      <div ref={el => shapesRef.current[0] = el} className="shape circle"></div>
      <div ref={el => shapesRef.current[1] = el} className="shape square"></div>
      <div ref={el => shapesRef.current[2] = el} className="shape triangle"></div>
      <div ref={el => shapesRef.current[3] = el} className="shape diamond"></div>
      <div ref={el => shapesRef.current[4] = el} className="shape circle small"></div>
      <div ref={el => shapesRef.current[5] = el} className="shape square small"></div>
      <div ref={el => shapesRef.current[6] = el} className="shape triangle small"></div>
      <div ref={el => shapesRef.current[7] = el} className="shape diamond small"></div>
      <div ref={el => shapesRef.current[8] = el} className="shape circle large"></div>
      <div ref={el => shapesRef.current[9] = el} className="shape square large"></div>
      <div ref={el => shapesRef.current[10] = el} className="shape triangle large"></div>
      <div ref={el => shapesRef.current[11] = el} className="shape diamond large"></div>
    </div>
  );
};

const Home = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const titles = [
      'Cruises',
      'Airlines',
      'Hotels',
      'Restaurant',
      'Attractions'
    ];
    let currentIndex = 0;

    const tl = gsap.timeline({ repeat: -1 });

    function animateTitle() {
      const currentTitle = titles[currentIndex];
      const nextIndex = (currentIndex + 1) % titles.length;
      const nextTitle = titles[nextIndex];

      tl.to(titleRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -50,
        onComplete: () => {
          titleRef.current.textContent = nextTitle;
        }
      })
      .to(titleRef.current, {
        duration: 0.5,
        opacity: 1,
        y: 0
      })
      .to({}, { duration: 2 }); // Pause for 2 seconds

      currentIndex = nextIndex;
    }

    animateTitle();
    const interval = setInterval(animateTitle, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <AnimatedShapes />
      <header>
        <div className="logo">
          <div className="logo-icon">
            <span className="icon-text">Brands</span>
            <span className="icon-text">We</span>
            <span className="icon-text">Travel</span>
            <span className="icon-text">With</span>
          </div>
          <span className="logo-text">Brands We Travel With</span>
        </div>
        <button className="jump-to-btn">Jump to...</button>
      </header>
      
      <main>
        <p className="annual-report">An annual report on how<br />travelers consider brands</p>
        
        <div className="main-title">
          <h1 ref={titleRef}>Cruises</h1>
          <h1>
            <span className="we-shape white"></span>
            We
            <span className="we-shape black-circle"></span>
          </h1>
          <h1>Travel</h1>
          <h1>With</h1>
        </div>
        
        <p className="description">
          Travelers choose different brands at each stage of<br />
          their journey. Find insights on what they value, and<br />
          how you can influence their brand decisions at the<br />
          perfect moment.
        </p>
      </main>
      
      <footer>
        <div className="scroll-indicator"></div>
      </footer>
    </div>
  );
};

export default Home;
