import React, { useState, useEffect } from "react";
import "./Hero.css";
import { FaArrowLeft, FaArrowRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import product1 from '../../Assets/bat png.png';
import product2 from '../../Assets/bat png.png';
import product3 from '../../Assets/bat png.png';
import product4 from '../../Assets/bat png.png';
import product5 from '../../Assets/bat png.png';
import product6 from '../../Assets/bat png.png';
import product7 from '../../Assets/bat png.png';
import product8 from '../../Assets/bat png.png';
import product9 from '../../Assets/bat png.png';

// Sample products data
const products = [
  { id: 1, name: 'Product 1', price: 'Rs.50', rating: 4.5, image: product1 },
  { id: 2, name: 'Product 2', price: 'Rs.75', rating: 4.6, image: product2 },
  { id: 3, name: 'Product 3', price: 'Rs.60', rating: 4.3, image: product3 },
  { id: 4, name: 'Product 4', price: 'Rs.50', rating: 4.5, image: product4 },
  { id: 5, name: 'Product 5', price: 'Rs.75', rating: 4.6, image: product5 },
  { id: 6, name: 'Product 6', price: 'Rs.60', rating: 4.3, image: product6 },
  { id: 7, name: 'Product 7', price: 'Rs.50', rating: 4.5, image: product7 },
  { id: 8, name: 'Product 8', price: 'Rs.75', rating: 4.6, image: product8 },
  { id: 9, name: 'Product 9', price: 'Rs.60', rating: 4.3, image: product9 },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // Auto change every 10 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < products.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    } else {
      setCurrentIndex(0); // Loop back to the beginning
    }
  };

  const handlePrevious = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className="hero container" id="home">
      {/* Centered Product Section */}
      <div className="centered-product-container">
       <div className="rotating-circle">
        <div className="circle-content">
        <div className="top-left-text">
          <h1><span className="highlight">UNLOCK</span> YOUR <br/>FULL POTENTIAL</h1>
        </div>
        <img
          src={products[currentIndex % products.length].image}
          alt={products[currentIndex % products.length].name}
          className="rotating-product-image"
        />
        <div className="bottom-right-text">
          <h1>WITH <span className="highlight">ELITE</span> <br/>SPORTS EQUIPMENT</h1>
        </div>
        </div>
       </div>
       <button className="cta-button">Get Your Gear Today</button>
      </div>

      <div className="top-selling-container">
        <h2 className="section-heading">Top Selling Products</h2>
        <div className="product-carousel-wrapper">
          <FaArrowLeft className="nav-icon left-icon" onClick={handlePrevious} />
          <div className="product-grid">
            {currentProducts.map((product, index) => (
              <div
                key={product.id}
                className={`product-item ${index % 2 === 0 ? 'even-item' : 'odd-item'}`}
              >
                <div className="image-container">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-details">
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">{product.price}</p>
                  <div className="rating">
                    {Array.from({ length: 5 }, (_, i) => {
                      if (i < Math.floor(product.rating)) {
                        return <FaStar key={i} className="star-icon filled" />;
                      } else if (i < product.rating && i === Math.floor(product.rating)) {
                        return <FaStarHalfAlt key={i} className="star-icon filled" />;
                      } else {
                        return <FaStar key={i} className="star-icon outlined" />;
                      }
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <FaArrowRight className="nav-icon right-icon" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
