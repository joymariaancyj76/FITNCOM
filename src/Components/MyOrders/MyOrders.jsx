import React, { useContext, useState } from "react";
import "./MyOrders.css";
import { UserStatusContext } from "../../Scripts/AppContainer";

const MyOrders = () => {
  const [isLoggedIn] = useContext(UserStatusContext); // Get authentication status
  const orders = [
    {
      id: 1,
      productName: "Cricket Bat",
      orderDate: "2024-11-10",
      status: "Pending",
      paymentStatus: "Paid",
      totalPrice: "$50",
      deliveryDateEstimate: "2024-11-20",
      trackingLink: "https://example.com/track/1",
      notes: "Expedited delivery requested",
    },
    {
      id: 2,
      productName: "Basketball",
      orderDate: "2024-11-12",
      status: "Shipped",
      paymentStatus: "Paid",
      totalPrice: "$30",
      deliveryDateEstimate: "2024-11-22",
      trackingLink: "https://example.com/track/2",
      notes: "Deliver to the back door",
    },
    {
      id: 3,
      productName: "Tennis Racket",
      orderDate: "2024-11-14",
      status: "Delivered",
      paymentStatus: "Paid",
      totalPrice: "$60",
      deliveryDateEstimate: "2024-11-18",
      trackingLink: "https://example.com/track/3",
      notes: "Delivered early",
    },
    {
      id: 4,
      productName: "Volleyball",
      orderDate: "2024-11-15",
      status: "Cancelled",
      paymentStatus: "Refunded",
      totalPrice: "$25",
      deliveryDateEstimate: "--",
      trackingLink: null,
      notes: "Cancelled due to stock issues",
    },
  ];

  const [selectedTab, setSelectedTab] = useState("All Orders");

  const tabs = ["All Orders", "Pending Orders", "Shipped Orders", "Delivered Orders", "Cancelled Orders"];

  const filteredOrders = orders.filter((order) => {
    if (selectedTab === "All Orders") return true;
    if (selectedTab === "Pending Orders") return order.status === "Pending";
    if (selectedTab === "Shipped Orders") return order.status === "Shipped";
    if (selectedTab === "Delivered Orders") return order.status === "Delivered";
    if (selectedTab === "Cancelled Orders") return order.status === "Cancelled";
    return false;
  });

  return isLoggedIn ? (
    <div className="my-orders-container">
      <div className="my-orders-content">
        {/* Left column: Filters */}
        <div className="filters">
          <h3>Filter Orders</h3>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`filter-button ${selectedTab === tab ? "active" : ""}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right column: Orders Table */}
        <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Order Date</th>
                <th>Order Status</th>
                <th>Payment Status</th>
                <th>Total Price</th>
                <th>Delivery Date Estimate</th>
                <th>Track Order</th>
                <th>Additional Notes</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.status}</td>
                    <td>{order.paymentStatus}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.deliveryDateEstimate}</td>
                    <td>
                      {order.trackingLink ? (
                        <a href={order.trackingLink} target="_blank" rel="noopener noreferrer">
                          Track
                        </a>
                      ) : (
                        "--"
                      )}
                    </td>
                    <td>{order.notes}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No orders found for the selected filter.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <div className="not-logged-in-message">
      <h2>You need to sign in to view your orders.</h2>
    </div>
  );
};

export default MyOrders;
