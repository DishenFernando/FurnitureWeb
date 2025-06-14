import React from 'react';
import { FaChair, FaAward, FaUsers, FaLeaf, FaTruck, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div id='about' className="about-container">
      <div className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Crafting Timeless Spaces</h1>
          <p>Where quality meets comfort in every piece</p>
        </div>
      </div>

      <div className="about-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>Founded in 1983, Singhe Furniture began as a small workshop with a big dream - to create furniture that stands the test of time. What started as a family passion project has grown into a beloved brand known for craftsmanship, sustainability, and design excellence.</p>
          <p>Today, we continue that tradition, blending artisanal techniques with modern design to create pieces that become the heart of your home.</p>
        </div>
        <div className="story-image">
          <div className="image-frame"></div>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat-item">
          <FaAward className="stat-icon" />
          <div className="stat-number">40+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <FaUsers className="stat-icon" />
          <div className="stat-number">25,000+</div>
          <div className="stat-label">Happy Customers</div>
        </div>
        <div className="stat-item">
          <FaLeaf className="stat-icon" />
          <div className="stat-number">100%</div>
          <div className="stat-label">Sustainable Materials</div>
        </div>
        <div className="stat-item">
          <FaChair className="stat-icon" />
          <div className="stat-number">500+</div>
          <div className="stat-label">Unique Designs</div>
        </div>
      </div>

      <div className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon"><FaLeaf /></div>
            <h3>Sustainability</h3>
            <p>We source only ethically harvested materials and use eco-friendly production methods to minimize our environmental impact.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><FaChair /></div>
            <h3>Craftsmanship</h3>
            <p>Each piece is handcrafted by skilled artisans who take pride in every detail, ensuring quality that lasts generations.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><FaTruck /></div>
            <h3>Customer Care</h3>
            <p>From personalized design consultations to white-glove delivery, we're with you every step of the way.</p>
          </div>
          {/* <div className="value-card">
            <div className="value-icon"><FaHandshake /></div>
            <h3>Integrity</h3>
            <p>We believe in honest pricing, transparent sourcing, and standing behind every product we sell.</p>
          </div> */}
        </div>
      </div>

      {/* <div className="about-team">
        <h2>Meet Our Artisans</h2>
        <p>Behind every Artisan Furnishings piece is a team of dedicated craftspeople who pour their expertise and passion into creating furniture you'll love.</p>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image m1"></div>
            <h3>Carlos Mendez</h3>
            <p>Master Woodworker</p>
          </div>
          <div className="team-member">
            <div className="member-image m2"></div>
            <h3>Sophie Laurent</h3>
            <p>Lead Designer</p>
          </div>
          <div className="team-member">
            <div className="member-image m3"></div>
            <h3>James Wilson</h3>
            <p>Upholstery Specialist</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;