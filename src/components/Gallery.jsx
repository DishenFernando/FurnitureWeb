import React from 'react';
import './Gallery.css';


const images = [
  { src: 'furniture1.jpg', title: 'Modern Sofa' },
  { src: 'furniture2.jpg', title: 'Elegant Chair' },
  { src: 'furniture3.jpg', title: 'Wooden Table' },
  { src: 'furniture4.jpg', title: 'Cozy Armchair' },
  { src: 'furniture5.jpg', title: 'Classic Dining Set' },
  { src: 'furniture6.jpg', title: 'Stylish Coffee Table' },
  { src: 'furniture7.jpg', title: 'Rustic Bookshelf' },
  { src: 'furniture8.jpg', title: 'Contemporary Bed Frame' },
  { src: 'furniture9.jpg', title: 'Vintage Side Table' },
  { src: 'furniture10.jpg', title: 'Minimalist Desk' }
  
  
];

function Gallery() {
  return (
    <section id="gallery">
      <h2>Furniture Gallery</h2>
      <div className="gallery-grid">
        {images.map(({ src, title }, idx) => (
          <div key={idx} className="gallery-item">
            <img src={`/images/${src}`} alt={title} />
            <div className="overlay">
              <p>{title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
