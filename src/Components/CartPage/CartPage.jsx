import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./CartPage.css"; // Ensure this file contains necessary styles
import productimg from "../../Assets/Images/bat png.png";
import TopSellingProduct from "../TopSellingProducts/TopSellingProduct";
import Wishlist from "../Wishlist/Wishlist";
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
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedUPIOption, setSelectedUPIOption] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false); // To track order placement status
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Simulate order placement
    setOrderPlaced(true); // Set order as placed
  };

  const handleContinueShopping = () => {
    setOrderPlaced(false); // Hide the order placed message
    navigate("/products"); // Redirect to the products page
  };

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Customer Name',
      details: 'House no, House Name, Street Name, District, State.',
      pincode: '000 000',
      phone: '+00 0000000000'
    },
    {
      id: 2,
      name: 'Customer Name',
      details: 'House no, House Name, Street Name, District, State.',
      pincode: '000 000',
      phone: '+00 0000000000'
    }
  ]);

  const handleRemove = (id) => {
    setAddresses(addresses.filter(address => address.id !== id));
  };

  const handleAddAddress = () => {
    navigate('/myprofile');
  };

  const handleEdit = (address) => {
    navigate('/myprofile', { state: { address } });
  };


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleUPIOptionChange = (event) => {
    setSelectedUPIOption(event.target.value);
  };
  const handlePayNow = () => {
    alert('Payment processing...');
    // Add your payment processing logic here
  };
  const handleProceedToPay = () => {
    if (activeTab === "cart" && cart.length > 0) {
      setActiveTab("address");
    } else if (activeTab === "address" && addresses.length > 0) {
      setActiveTab("payment");
    } else {
      alert("Please ensure you have at least one item in the cart or one address added.");
    }
  };
  // Sample products data
  const products = [
    { id: 1, name: "Product 1", price: "Rs.50", rating: 4.5, image: "https://i.ibb.co/kgQY3dT/bat-png.png"},
    { id: 2, name: "Product 2", price: "Rs.75", rating: 4.6, image: "https://i.ibb.co/kgQY3dT/bat-png.png" },
    { id: 3, name: "Product 3", price: "Rs.60", rating: 4.3, image: "https://i.ibb.co/kgQY3dT/bat-png.png" },
    { id: 4, name: "Product 4", price: "Rs.50", rating: 4.5, image: "https://i.ibb.co/kgQY3dT/bat-png.png" },
    { id: 5, name: "Product 5", price: "Rs.75", rating: 4.6, image: "https://i.ibb.co/kgQY3dT/bat-png.png" },
    { id: 6, name: "Product 6", price: "Rs.60", rating: 4.3, image: "https://i.ibb.co/kgQY3dT/bat-png.png" },
    { id: 7, name: "Product 7", price: "Rs.50", rating: 4.5, image: "https://i.ibb.co/kgQY3dT/bat-png.png" },
    { id: 8, name: "Product 8", price: "Rs.75", rating: 4.6, image: "https://i.ibb.co/kgQY3dT/bat-png.png" },
    { id: 9, name: "Product 9", price: "Rs.60", rating: 4.3, image: "https://i.ibb.co/kgQY3dT/bat-png.png" },
  ];

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
      image: productimg, 
      price: "Rs. 5000/-",
      rating: 4.5,
      description:
        "Willow is the only type of wood that can provide the strength and compression needed for a cricket bat.",
    },
    {
      id: 2,
      name: "Cricket Willow Bat",
      image: productimg, 
      price: "Rs. 3000/-",
      rating: 4,
      description: "A high-quality football for professional play.",
    },
  ];

  const renderTabContent = () => {
    if (activeTab === "cart") {
      return (
        <div className="cart-content">
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
              {addresses.map(address => (
                <div key={address.id} className="address-box">
                  <label>
                    <input
                      type="checkbox"
                      name="selectedAddress"
                      value={address.id}
                      checked={selectedOption === address.id} // Ensure this reflects the selected address
                      onChange={() => setSelectedOption(address.id)} // Set the selected address
                    />
                    <div className="address-details">
                      <p>{address.name}</p>
                      <p>{address.details}</p>
                      <p>Pincode - {address.pincode}</p>
                      <p>Phone no: {address.phone}</p>
                    </div>
                  </label>
                  <div className="address-actions">
                    <button className="remove-button" onClick={() => handleRemove(address.id)}>Remove</button>
                    <button className="edit-button" onClick={() => handleEdit(address)}>Edit</button>
                  </div>
                </div>
              ))}
              <button className="add-address-button" onClick={handleAddAddress}>Add New Address</button>
            </div>
          );
    } else if (activeTab === "payment") {
      return (
        <div className="payment-content">
      <h2>Payment Options</h2>
      <div className={`payment-option ${selectedOption === 'cod' ? 'selected' : ''}`}>
        <label>
          <input
            type="radio"
            name="payment"
            value="cod"
            onChange={handleOptionChange}
          />
          <span>Pay On Delivery</span>
        </label>
      </div>
      <div className={`payment-option ${selectedOption === 'upi' ? 'selected' : ''}`}>
        <label>
          <input
            type="radio"
            name="payment"
            value="upi"
            onChange={handleOptionChange}
          />
      <span>Pay Via UPI</span>
        </label>
        {selectedOption === 'upi' && (
          <div className="upi-options">
            <div className="upi-option">
              <label>
                <input
                  type="radio"
                  name="upi"
                  value="gpay"
                  onChange={handleUPIOptionChange}
                />
                <span>GPay</span>
              </label>
              {selectedUPIOption === 'gpay' && (
                <input type="text" placeholder="Enter GPay UPI ID" className="upi-input" />
              )}
            </div>
            <div className="upi-option">
              <label>
                <input
                  type="radio"
                  name="upi"
                  value="phonepe"
                  onChange={handleUPIOptionChange}
                />
                <span>PhonePe</span>
              </label>
              {selectedUPIOption === 'phonepe' && (
                <input type="text" placeholder="Enter PhonePe UPI ID" className="upi-input" />
              )}
            </div>
          </div>
        )}
      </div>
      <div className={`payment-option ${selectedOption === 'card' ? 'selected' : ''}`}>
        <label>
          <input
            type="radio"
            name="payment"
            value="card"
            onChange={handleOptionChange}
          />
          <span>Credit/Debit Card</span>
        </label>
        {selectedOption === 'card' && (
          <div className="card-inputs">
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Card Holder Name" />
            <input type="text" placeholder="Expiry Date" />
            <input type="text" placeholder="CVV" />
          </div>
        )}
      </div>
      <button className="pay-now-button" onClick={handlePayNow}>PAY NOW</button>
    </div>
  );
    }
  };

return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {orderPlaced && (
        <div className="order-confirmation">
          <h2>Order Placed Successfully!</h2>
          <button onClick={handleContinueShopping}>Continue Shopping</button>
        </div>
      )}

      {!orderPlaced && (
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
      )}

      <div className="tab-content">{renderTabContent()}</div>
      <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Price Details: (1 Item)</p>
            <p>Total MRP: Rs. 1000/-</p>
            <p>Coupon Code : <button className="apply-coupon-button">APPLY COUPON</button></p>
            <p>Discount: Rs. 100/-</p>
            <h4>Order Total: Rs. 900/-</h4>
          </div>
          {activeTab === "cart" && (
        <div>
          <button className="proceed-to-pay-button" onClick={handleProceedToPay}>
            PROCEED TO PAY
          </button>
          <Wishlist/>
        </div>
      )}
      {activeTab === "address" && (
        <div>
          <button className="proceed-to-pay-button" onClick={handleProceedToPay}>
          PROCEED TO PAY
          </button>
        </div>
      )}
         {/* Place Order button only on the Payment tab */}
      {activeTab === "payment" && (
        <div>
          <button className="place-order-button" onClick={handlePlaceOrder}>
            PLACE ORDER
          </button>
        </div>
      )}
      <TopSellingProduct products={products} />
    </div>
  );
};

export default CartPage;
