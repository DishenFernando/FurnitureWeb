import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = ['hero', 'about', 'gallery', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    closeMobileMenu();
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <div className="brand-icon">
            <div className="icon-shape"></div>
          </div>
          <div className="brand-text">
            <h2 className="brand-title">Singhe Furniture</h2>
            <span className="brand-subtitle">Fine Craftsmanship</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-nav desktop-nav">
          <a 
            href="#hero" 
            className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
            onClick={() => handleNavClick('hero')}
          >
            <span className="nav-text">Home</span>
            <div className="nav-indicator"></div>
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            <span className="nav-text">About</span>
            <div className="nav-indicator"></div>
          </a>
          <a 
            href="#gallery" 
            className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
            onClick={() => handleNavClick('gallery')}
          >
            <span className="nav-text">Gallery</span>
            <div className="nav-indicator"></div>
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            <span className="nav-text">Contact</span>
            <div className="nav-indicator"></div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav">
          <a 
            href="#hero" 
            className={`mobile-nav-link ${activeSection === 'hero' ? 'active' : ''}`}
            onClick={() => handleNavClick('hero')}
          >
            <span className="mobile-nav-text">Home</span>
          </a>
          <a 
            href="#about" 
            className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            <span className="mobile-nav-text">About</span>
          </a>
          <a 
            href="#gallery" 
            className={`mobile-nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
            onClick={() => handleNavClick('gallery')}
          >
            <span className="mobile-nav-text">Gallery</span>
          </a>
          <a 
            href="#contact" 
            className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            <span className="mobile-nav-text">Contact</span>
          </a>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div className="mobile-backdrop" onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
}

export default Navbar;
