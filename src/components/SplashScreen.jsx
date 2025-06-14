import React, { useState, useEffect } from 'react';
import { FaLeaf, FaChair, FaHammer } from 'react-icons/fa';
import './SplashScreen.css';

function SplashScreen({ onFinish }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Trigger animations on mount
    setTimeout(() => setIsLoaded(true), 100);
    setTimeout(() => setShowContent(true), 600);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 500); // Delay before calling onFinish
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`splash-screen ${isLoaded ? 'loaded' : ''}`}>
      {/* Wood Texture Background */}
      <div className="wood-background"></div>
      
      {/* Main Content */}
      <div className="splash-content">
        {/* Animated Logo */}
        <div className={`logo-container ${showContent ? 'show' : ''}`}>
          <div className="logo-frame">
            <div className="logo-inner">
              <FaChair className="logo-icon" />
              <h1 className="logo-text">Singhe Furniture</h1>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className={`tagline ${showContent ? 'show' : ''}`}>
          <p>Handcrafted Excellence Since 1983</p>
        </div>

        {/* Features Grid */}
        <div className={`features-grid ${showContent ? 'show' : ''}`}>
          <div className="feature">
            <FaLeaf className="feature-icon" />
            <span>Sustainable Materials</span>
          </div>
          <div className="feature">
            <FaHammer className="feature-icon" />
            <span>Artisan Crafted</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          <div className="progress-text">{progress}%</div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="sawdust-particle particle-1"></div>
      <div className="sawdust-particle particle-2"></div>
      <div className="sawdust-particle particle-3"></div>
    </div>
  );
}

export default SplashScreen;