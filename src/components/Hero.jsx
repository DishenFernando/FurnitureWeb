import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Singhe Furniture</h1>
        <p className="hero-tagline">Crafting Timeless Furniture for Modern Living</p>
        <div className="hero-cta">
          <button className="cta-primary">Explore Collections</button>
          <button className="cta-secondary">Book a Consultation</button>
        </div>
        <div className="hero-scroll">
          <FaChevronDown className="scroll-icon" />
          <span>Discover More</span>
        </div>
      </div>
      
      <div className="hero-features">
        <div className="feature-item">
          <div className="feature-icon">✧</div>
          <div className="feature-text">Handcrafted Quality</div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">♻</div>
          <div className="feature-text">Sustainable Materials</div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">✚</div>
          <div className="feature-text">Custom Designs</div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">✓</div>
          <div className="feature-text">Lifetime Warranty</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;