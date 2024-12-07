import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../../Assets/LOGO-transparent.png";
import signinicon from "../../Assets/signin-icon.png";
import { FaUserCircle } from "react-icons/fa";
import { UserStatusContext } from "../../Scripts/AppContainer";
import User from "../../Scripts/User";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useContext(UserStatusContext);

  const handleMenuToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("access-token");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="signin-icon">
        <Link to="/">
          <img src={signinicon} alt="Sign In" />
        </Link>
      </div>

      <div className="menu-icon">
        {isLoggedIn && (
          <div className="profile-name">
            <FaUserCircle /> {User.getUserName()}
          </div>
        )}
        <MdOutlineShoppingCart />
        <FiMenu onClick={handleMenuToggle} />
      </div>
      {showDropdown && (
        <div className="dropdown-container" onMouseLeave={handleMenuToggle}>
          <div className="dropdown-section">
            ACCOUNT
            <div className="sub-dropdown-menu">
              <Link to="/profile">My Profile</Link>
              <Link to="/MyOrders">My Orders</Link>
              <Link to="/wishlist">My Wishlist</Link>
              <Link to="/order-history">Order History</Link>
              <Link onClick={handleLogOut} to="/">
                Logout
              </Link>
            </div>
          </div>
          <div className="dropdown-section">
            PRODUCTS
            <div className="sub-dropdown-menu">
              <Link to="/cricket">Cricket</Link>
              <Link to="/basketball">Basketball</Link>
              <Link to="/football">Football</Link>
              <Link to="/badminton">Badminton</Link>
              <Link to="/volleyball">Volleyball</Link>
              <Link to="/tennis">Tennis</Link>
              <Link to="/table-tennis">Table Tennis</Link>
            </div>
          </div>
          <div className="dropdown-section">
            HELP
            <div className="sub-dropdown-menu">
              <Link to="/contact-us">Contact Us</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/warranty">Warranty Policy</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
