import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import addtocarticon from "../../Assets/Images/addtocart.png";
import logo from "../../Assets/Images/LOGO-transparent1.png";
import signinicon from "../../Assets/Images/signin-icon.png";
import { UserStatusContext } from "../../Scripts/AppContainer";
import User from "../../Scripts/User";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useContext(UserStatusContext);
  const navigate = useNavigate(); // Initialize navigate function

  const handleMenuToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("access-token");
  };

  const handleAddToCartClick = () => {
    navigate("/cart"); // Navigate to CartPage when "Add to Cart" icon is clicked
  };

  return (
    <nav className="navbar">
      <div className="left-bar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="right-bar">
        <div className="signin-icon">
          <Link to="/">
            <img src={signinicon} alt="Sign In" />
          </Link>
          {isLoggedIn && (
            <div className="profile-name">{User.getUserName()}</div>
          )}
        </div>
        <div className="addtocart-icon" onClick={handleAddToCartClick}>
          <img src={addtocarticon} alt="Add to Cart" />
        </div>
        <div className="menu-icon">
          {/* <MdOutlineShoppingCart /> */}
          <FiMenu onClick={handleMenuToggle} />
        </div>
      </div>

      {showDropdown && (
        <div className="dropdown-container" onMouseLeave={handleMenuToggle}>
          <div className="dropdown-section">
            ACCOUNT
            <div className="sub-dropdown-menu">
              <Link to="/myprofile">My Profile</Link>
              <Link to="/myorders">My Orders</Link>
              <Link to="/mywishlist">My Wishlist</Link>
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
              <Link to="/termsconditions">Terms & Conditions</Link>
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
