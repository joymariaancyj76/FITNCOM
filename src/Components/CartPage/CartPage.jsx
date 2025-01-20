import React, { useState, useEffect } from "react";
import "./CartPage.css"; // Ensure this file contains necessary styles
import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import evenaddicon from "../../Assets/Images/cart icon 1.png";
import evensubicon from "../../Assets/Images/cart icon 4.png";
import oddaddicon from "../../Assets/Images/cart icon 2.png";
import oddsubicon from "../../Assets/Images/cart icon 3.png";
import productimg from "../../Assets/Images/bat png.png";
import TopSellingProduct from "../TopSellingProducts/TopSellingProduct";
import product1 from "../../Assets/Images/bat png.png";
import product2 from "../../Assets/Images/bat png.png";
import product3 from "../../Assets/Images/bat png.png";
import product4 from "../../Assets/Images/bat png.png";
import product5 from "../../Assets/Images/bat png.png";
import product6 from "../../Assets/Images/bat png.png";
import product7 from "../../Assets/Images/bat png.png";
import product8 from "../../Assets/Images/bat png.png";
import product9 from "../../Assets/Images/bat png.png";

const CartPage = () => {
  const [activeTab, setActiveTab] = useState("cart");
  const [currentProducts, setCurrentProducts] = useState([]); // Current products to display
  const [cart, setCart] = useState([]); // Cart items
  const [currentIndex, setCurrentIndex] = useState(0); // Index for the current product in the carousel

  // Sample products data
  const products = [
    { id: 1, name: "Product 1", price: "Rs.50", rating: 4.5, image: product1 },
    { id: 2, name: "Product 2", price: "Rs.75", rating: 4.6, image: product2 },
    { id: 3, name: "Product 3", price: "Rs.60", rating: 4.3, image: product3 },
    { id: 4, name: "Product 4", price: "Rs.50", rating: 4.5, image: product4 },
    { id: 5, name: "Product 5", price: "Rs.75", rating: 4.6, image: product5 },
    { id: 6, name: "Product 6", price: "Rs.60", rating: 4.3, image: product6 },
    { id: 7, name: "Product 7", price: "Rs.50", rating: 4.5, image: product7 },
    { id: 8, name: "Product 8", price: "Rs.75", rating: 4.6, image: product8 },
    { id: 9, name: "Product 9", price: "Rs.60", rating: 4.3, image: product9 },
  ];

  // Simulate fetching products data
  // useEffect(() => {
  //   const products = [
  //     {
  //       id: 1,
  //       name: "Product 1",
  //       price: "Rs. 1000/-",
  //       image: "product1.jpg",
  //       rating: 4.5,
  //     },
  //     {
  //       id: 2,
  //       name: "Product 2",
  //       price: "Rs. 1500/-",
  //       image: "product2.jpg",
  //       rating: 3.5,
  //     },
  //     {
  //       id: 3,
  //       name: "Product 3",
  //       price: "Rs. 2000/-",
  //       image: "product3.jpg",
  //       rating: 5,
  //     },
  //     {
  //       id: 4,
  //       name: "Product 4",
  //       price: "Rs. 1200/-",
  //       image: "product4.jpg",
  //       rating: 4,
  //     },
  //     {
  //       id: 5,
  //       name: "Product 5",
  //       price: "Rs. 1800/-",
  //       image: "product5.jpg",
  //       rating: 3.8,
  //     },
  //     // Add more products as needed
  //   ];
  //   setCurrentProducts(products);
  // }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Prevent going below index 0
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, currentProducts.length - 1)
    ); // Prevent going beyond last product
  };

  const handleAddToCart = (productId) => {
    setCart((prevCart) => [...prevCart, productId]); // Add product to cart
  };
  const cartItems = [
    {
      id: 1,
      name: "Cricket Bat",
      image: { productimg }, // Replace with actual image path
      price: "Rs. 5000/-",
      rating: 4.5,
      description:
        "Willow is the only type of wood that can provide the strength and compression needed for a cricket bat.",
    },
    {
      id: 2,
      name: "Cricket Willow Bat",
      image: { productimg }, // Replace with actual image path
      price: "Rs. 3000/-",
      rating: 4,
      description: "A high-quality football for professional play.",
    },
  ];

  const renderTabContent = () => {
    if (activeTab === "cart") {
      return (
        <div className="cart-content">
          <h2>Shopping Cart</h2>
          {cartItems.map((product) => (
            <div key={product.id} className="product-box">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <label>
                SIZE:
                <select>
                  {["1", "2", "3", "4", "5", "6", "H", "SH", "LH"].map(
                    (size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    )
                  )}
                </select>
              </label>
              <label>
                QTY:
                <select>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((qty) => (
                    <option key={qty} value={qty}>
                      {qty}
                    </option>
                  ))}
                </select>
              </label>
              <p>{product.price}</p>
              <div className="action-buttons">
                <button className="remove-button">Remove</button>
                <button className="wishlist-button">Move to Wishlist</button>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (activeTab === "address") {
      return (
        <div className="address-content">
          <h2>Select Delivery Address</h2>
          <div className="address-box1">
            <p>Customer Name</p>
            <p>House no, House Name, Street Name, District, State.</p>
            <p>Pincode - 000 000</p>
            <p>Phone no: +00 0000000000</p>
            <div className="address-box2">
              <p>Customer Name</p>
              <p>House no, House Name, Street Name, District, State.</p>
              <p>Pincode - 000 000</p>
              <p>Phone no: +00 0000000000</p>
              <div className="address-actions">
                <button className="remove-button">Remove</button>
                <button className="edit-button">Edit</button>
              </div>
            </div>
            <div className="address-actions">
              <button className="remove-button">Remove</button>
              <button className="edit-button">Edit</button>
            </div>
          </div>
          <button className="add-address-button">Add New Address</button>
        </div>
      );
    } else if (activeTab === "payment") {
      return (
        <div className="payment-content">
          <h2>Payment Options</h2>
          <div className="payment-option">
            <label>
              <input type="radio" name="payment" value="cod" />
              Pay On Delivery
            </label>
          </div>
          <div className="payment-option">
            <label>
              <input type="radio" name="payment" value="upi" />
              Pay Via UPI (GPay, PhonePe)
            </label>
          </div>
          <div className="payment-option">
            <label>
              <input type="radio" name="payment" value="card" />
              Credit/Debit Card
              <div>
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Card Holder Name" />
                <input type="text" placeholder="Expiry Date" />
                <input type="text" placeholder="CVV" />
              </div>
            </label>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="cart-page">
      <header className="cart-header">
        <nav>
          <span
            className={activeTab === "cart" ? "active" : ""}
            onClick={() => setActiveTab("cart")}
          >
            Cart
          </span>
          <span
            className={activeTab === "address" ? "active" : ""}
            onClick={() => setActiveTab("address")}
          >
            Address
          </span>
          <span
            className={activeTab === "payment" ? "active" : ""}
            onClick={() => setActiveTab("payment")}
          >
            Payment
          </span>
        </nav>
      </header>

      {renderTabContent()}

      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Price Details: (1 Item)</p>
        <p>Total MRP: Rs. 1000/-</p>
        <p>Discount: Rs. 100/-</p>
        <h4>Order Total: Rs. 900/-</h4>
      </div>
      <TopSellingProduct products={products} />
      {/* <div className="top-selling-container">
        <h2 className="section-heading">Top Selling Products</h2>
        <div className="product-carousel-wrapper">
          <FaArrowLeft className="nav-icon left-icon" onClick={handlePrevious} />
          <div className="product-grid">
            {currentProducts.map((product, index) => (
              <div
                key={product.id}
                className={`product-item ${index % 2 === 0 ? 'even-item' : 'odd-item'}`}
              >
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} />
                  <div
                    className="cart-icon"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    <img
                      src={
                        cart.includes(product.id)
                          ? (index % 2 === 0 ? evensubicon : oddsubicon)
                          : (index % 2 === 0 ? evenaddicon : oddaddicon)
                      }
                      alt="Cart Icon"
                      className="cart-icon-image"
                    />
                  </div>
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
      </div> */}
    </div>
  );
};

export default CartPage;
