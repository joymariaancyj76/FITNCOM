import React, { useState } from 'react';
import './Wishlist.css';
import  wishlistproductImage from "../../Assets/Images/bat png.png"; // Replace with your actual image source

// Star Rating Component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < rating ? '★' : '☆');
  }
  return <div className="star-rating">{stars.join(' ')}</div>;
};

const Wishlist = () => {
  // Sample data for wishlist products
  const [wishlist, setWishlist] = useState([
    { id: 1, name: 'Proflex bat', image: wishlistproductImage, price: 'Rs.1000', rating: 4 },
    { id: 2, name: 'Product 2', image: wishlistproductImage, price: 'Rs.1000', rating: 5 },
    { id: 3, name: 'Product 3', image: wishlistproductImage, price: 'Rs.1000', rating: 5 },
    { id: 4, name: 'Product 4', image: wishlistproductImage, price: 'Rs.1000', rating: 4 },
  ]);

  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      <div className="wishlist-grid">
        {wishlist.map((product, index) => (
          <div
            key={product.id}
            className={`wishlist-item ${index % 2 === 0 ? 'wishlist-odd' : 'wishlist-even'}`}
          >
            <img src={product.image} alt={product.name} className="wishlist-product-image" />
            <div className="wishlist-product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <StarRating rating={product.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
