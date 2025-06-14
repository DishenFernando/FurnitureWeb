import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Singhe Furniture</h3>
          <p className="footer-text">
            Crafting exceptional Sri Lankan furniture since 1985. Our pieces blend
            traditional craftsmanship with contemporary design.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#">Custom Orders</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="footer-contact">
            <li>
              <i className="fas fa-map-marker-alt"></i> 123 Galle Road, Colombo,
              Sri Lanka
            </li>
            <li>
              <i className="fas fa-phone"></i> +94 11 234 5678
            </li>
            <li>
              <i className="fas fa-envelope"></i> info@lankafurnishings.com
            </li>
            <li>
              <i className="fas fa-clock"></i> Mon-Sat: 9:00 AM - 6:00 PM
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Singhe Furniture. All Rights
          Reserved.
        </p>
        <p>
          Crafted with <i className="fas fa-heart" style={{ color: '#d4af37' }}></i>{' '}
          in Sri Lanka
        </p>
      </div>
    </footer>
  )
}

export default Footer