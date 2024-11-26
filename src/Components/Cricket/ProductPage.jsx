import React, { useState } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";

// Define bat sizes and their associated details
const batSizes = {
  1: {
    description: "Ideal for children aged 4-5 years old, suitable for heights 4ft - 4ft 3in.",
    height: "25 1/4 inches",
    width: "3 1/2 inches",
    weight: "Lightweight",
    material: "Willow",
    price: "Rs. 2000",
  },
  2: {
    description: "Perfect for children aged 6-7 years, suitable for heights 4ft 3in - 4ft 6in.",
    height: "27 3/4 inches",
    width: "3 1/2 inches",
    weight: "Lightweight",
    material: "Willow",
    price: "Rs. 2200",
  },
  3: {
    description: "Designed for children aged 8-9 years, suitable for heights 4ft 6in - 4ft 9in.",
    height: "28 3/4 inches",
    width: "3 3/4 inches",
    weight: "Medium",
    material: "Kashmir Willow",
    price: "Rs. 2500",
  },
  4: {
    description: "Best for children aged 9-10 years, suitable for heights 4ft 9in - 4ft 11in.",
    height: "29 3/4 inches",
    width: "3 3/4 inches",
    weight: "Medium",
    material: "English Willow",
    price: "Rs. 2800",
  },
  5: {
    description: "Great for kids aged 10-11 years, suitable for heights 4ft 11in - 5ft 2in.",
    height: "30 3/4 inches",
    width: "4 inches",
    weight: "Medium",
    material: "English Willow",
    price: "Rs. 3000",
  },
  6: {
    description: "For players aged 11-13 years, suitable for heights 5ft 2in - 5ft 4in.",
    height: "31 3/4 inches",
    width: "4 inches",
    weight: "Heavy",
    material: "Grade A Willow",
    price: "Rs. 3500",
  },
  H: {
    description: "Harrow size for players aged 12-14 years, heights 5ft 4in - 5ft 8in.",
    height: "32 3/4 inches",
    width: "4 1/6 inches",
    weight: "Heavy",
    material: "Grade A Willow",
    price: "Rs. 4000",
  },
  SH: {
    description: "Short handle for players 15+ years, heights 5ft 8in - 6ft.",
    height: "33 1/2 inches",
    width: "4 1/4 inches",
    weight: "Heavy",
    material: "Premium Willow",
    price: "Rs. 4500",
  },
  LH: {
    description: "Long handle for players 15+ years, heights 6ft 4in and above.",
    height: "34 3/8 inches",
    width: "4 1/4 inches",
    weight: "Heavy",
    material: "Premium Willow",
    price: "Rs. 5000",
  },
};

const ProductPage = () => {
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [wishlistMessage, setWishlistMessage] = useState(""); // State for wishlist message
  const [showQuantity, setShowQuantity] = useState(false); // State to toggle quantity selector

  const { description, height, width, weight, material, price } = batSizes[selectedSize]; // Destructure selected size details

  // Handle the wishlist button click
  const handleAddToWishlist = () => {
    setWishlistMessage("Added to Wishlist!");
    setTimeout(() => setWishlistMessage(""), 2000); // Show message for 2 seconds
  };

  // Handle Add to Cart button click (Show quantity selector)
  const handleAddToCart = () => {
    setShowQuantity(true); // Show quantity selector after clicking Add to Cart
  };

  return (
    <div className="product-page">
      <main className="main-content">
        <section className="product-details">
          {/* Image container */}
          <div className="product-image-container">
            <img
              src={`/images/bat-size-${productId}-${selectedSize}.jpg`} // Image source based on productId and selectedSize
              alt={`Bat Size ${selectedSize}`}
              className="product-image"
            />
          </div>

          {/* Product information */}
          <div className="product-info">
            <h1>Bat Size {selectedSize}</h1>
            <p className="product-description">{description}</p>
            <p className="product-price">Price: {price}</p>

            {/* Size selection */}
            <div className="sizes">
              <h3>Select Size</h3>
              <div className="size-options">
                {Object.keys(batSizes).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-button ${selectedSize === size ? "active" : ""}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="action-buttons">
              <button onClick={handleAddToCart} className="add-to-cart">
                Add to Cart
              </button>
              <button onClick={handleAddToWishlist} className="wishlist-button">
                Add to Wishlist
              </button>
            </div>

            {/* Conditionally render quantity selector after Add to Cart is clicked */}
            {showQuantity && (
              <div className="quantity-section">
                <button
                  onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                  className="quantity-button"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-button"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Specifications */}
        <section className="description-section">
          <h2>Specifications</h2>
          <ul className="product-specs">
            <li><strong>Height:</strong> {height}</li>
            <li><strong>Width:</strong> {width}</li>
            <li><strong>Weight:</strong> {weight}</li>
            <li><strong>Material:</strong> {material}</li>
          </ul>
        </section>
      </main>

      {/* Wishlist popup message */}
      {wishlistMessage && (
        <div className="wishlist-popup">
          {wishlistMessage}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
