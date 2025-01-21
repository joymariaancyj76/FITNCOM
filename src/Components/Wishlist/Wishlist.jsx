import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Wishlist.css';

// Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {Array(fullStars).fill(<FaStar color="#ffd700" />)}
      {halfStar && <FaStarHalfAlt color="#ffd700" />}
      {Array(emptyStars).fill(<FaStar color="#ccc" />)}
    </div>
  );
};

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    { id: 1, name: 'Proflex bat', image: "https://i.ibb.co/kgQY3dT/bat-png.png", price: 'Rs.1000', rating: 4.5 },
    { id: 2, name: 'Product 2', image: "https://i.ibb.co/kgQY3dT/bat-png.png", price: 'Rs.1000', rating: 5 },
    { id: 3, name: 'Product 3', image: "https://i.ibb.co/kgQY3dT/bat-png.png", price: 'Rs.1000', rating: 3.5 },
    { id: 4, name: 'Product 4', image: "https://i.ibb.co/kgQY3dT/bat-png.png", price: 'Rs.1000', rating: 4 },
  ]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productId) => {
    if (cart.includes(productId)) {
      setCart(cart.filter((id) => id !== productId));
    } else {
      setCart([...cart, productId]);
    }
  };

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
            <div
              className="wishlist-cart-icon"
              onClick={() => handleAddToCart(product.id)}
            >
              <img
                src={
                  cart.includes(product.id)
                    ? index % 2 === 0
                      ? "https://i.ibb.co/sP3zZKF/cart-icon-4.png"
                      : "https://i.ibb.co/nLj2jpY/cart-icon-3.png"
                    : index % 2 === 0
                    ? "https://i.ibb.co/5YpSzCP/cart-icon-1.png"
                    : "https://i.ibb.co/5Wfff3K/cart-icon-2.png"
                }
                alt="Cart Icon"
                className="cart-icon-image"
              />
            </div>
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
