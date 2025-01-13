import React, { useState } from "react";
import "./OrderPage.css"; // Import your styles here
import product1 from "../../Assets/bat png.png"; // Replace with actual image path

// OrderTabs Component
const OrderTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="order-tabs">
      <button
        className={`tab ${activeTab === "orders" ? "active" : ""}`}
        onClick={() => setActiveTab("orders")}
      >
        ORDERS
      </button>
      <div className="tab.centre">
        <button
          className={`tab ${activeTab === "notShipped" ? "active" : ""}`}
          onClick={() => setActiveTab("notShipped")}
        >
          NOT YET SHIPPED
        </button>
      </div>
      <button
        className={`tab ${activeTab === "cancelled" ? "active" : ""}`}
        onClick={() => setActiveTab("cancelled")}
      >
        CANCELLED ORDERS
      </button>
    </div>
  );
};

const OrderItem = ({ order }) => {
  return (
    <div className="order-item">
      <div className="order-header">
        <div>Order Placed: {order.orderPlaced}</div>
        <div>Total: {order.totalAmount}</div>
        <div>Ship To: {order.shipTo}</div>
      </div>
      <div className="order-status">
        <div>{order.deliveryStatus}</div>
        <div>{order.orderDate}</div>
      </div>
      <div className="order-details">
        <div className="order-left">
          <div className="order-image-container">
            <img className="itemimg" src={order.itemImage} alt="Order Item" />
          </div>
        </div>
        <div className="order-right">
          <div className="item-description">
            <p>{order.itemDescription}</p>
          </div>
        </div>
      </div>

      <div className="order-buttons">
        <button className="buy-again">Buy It Again</button>
        <button className="view-item">View Your Item</button>
      </div>
    </div>
  );
};

// OrderPage Component
const OrderPage = () => {
  const [activeTab, setActiveTab] = useState("orders"); // Manage active tab state

  const orders = [
    {
      orderPlaced: "Jan 1, 2025",
      totalAmount: "Rs. 1000",
      shipTo: "Joy",
      deliveryStatus: "In Transit",
      orderDate: "Jan 1, 2025",
      itemDescription:
        "Willow is the only type of wood that can provide the strength and compression needed for a cricket bat. There are big differences in the performance of the two types of willow.",
      itemImage: product1,
    },
    {
      orderPlaced: "Jan 2, 2025",
      totalAmount: "Rs. 500",
      shipTo: "Alice",
      deliveryStatus: "Delivered",
      orderDate: "Jan 2, 2025",
      itemDescription:
        "Willow is the only type of wood that can provide the strength and compression needed for a cricket bat.",
      itemImage: product1, // replace with actual image path
    },
    {
      orderPlaced: "Jan 3, 2025",
      totalAmount: "Rs. 1500",
      shipTo: "Bob",
      deliveryStatus: "Shipped",
      orderDate: "Jan 3, 2025",
      itemDescription:
        "Willow is the only type of wood that can provide the strength and compression needed for a cricket bat.",
      itemImage: product1, // replace with actual image path
    },
  ];

  return (
    <div className="order-page">
      <h1 className="order-title">YOUR ORDERS</h1>

      {/* Order Tabs */}
      <OrderTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Order Items */}
      <div className="order-list">
        {orders.map((order) => (
          <OrderItem key={order.orderPlaced} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
