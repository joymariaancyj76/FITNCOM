import React, { useContext, useState } from "react";
import "./MyOrders.css";
import { UserStatusContext } from "../../Scripts/AppContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MyOrders = () => {
  const [isLoggedIn] = useContext(UserStatusContext); // Get authentication status
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [selectedTab, setSelectedTab] = useState("All Orders");

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

  const tabs = [
    "All Orders",
    "Pending Orders",
    "Shipped Orders",
    "Delivered Orders",
    "Cancelled Orders",
  ];

  const filteredOrders = orders.filter((order) => {
    if (selectedTab !== "All Orders" && order.status !== selectedTab.split(" ")[0]) {
      return false;
    }
    if (searchQuery && !order.productName.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return isLoggedIn ? (
    <div className="my-orders-container">
      {/* Left Column: Search and Filters */}
      <div className="left-column">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search orders by product name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>

        {/* Filter Heading and Tabs */}
        <div className="filters">
          <h3>Filter</h3>
          {/* All Orders Tab */}
          <div
            key="All Orders"
            className={`filter-box ${selectedTab === "All Orders" ? "active" : ""}`}
            onClick={() => setSelectedTab("All Orders")}
          >
            All Orders
          </div>
          {/* Other Tabs in two rows, two columns */}
          <div className="filter-row">
            {tabs.slice(1).map((tab) => (
              <div
                key={tab}
                className={`filter-box ${selectedTab === tab ? "active" : ""}`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Orders Table */}
      <div className="right-column">
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
                <th>Additional Notes</th>
                <th>Track Order</th>
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
                    <td>{order.notes}</td>
                    <td>
                      {order.trackingLink ? (
                        <a href={order.trackingLink} target="_blank" rel="noopener noreferrer">
                          <button className="track-order-btn">Track Order</button>
                        </a>
                      ) : (
                        "--"
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No orders found for the selected filter or search query.</td>
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
