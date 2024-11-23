import React, { useState, useEffect } from "react";
import "./Kids.css";
import baseball from "../../Assets/kids/baseball.jpg";
import cricketball from "../../Assets/kids/item002.jpg";
import accessories1 from "../../Assets/kids/accessories01.jpg";
import accessories2 from "../../Assets/kids/accessories02.jpg";
import kidbanner from "../../Assets/kids/kidsbanner.png";
import collection1 from "../../Assets/kids/collection1.png";
import collection2 from "../../Assets/kids/collection2.png";
import collection3 from "../../Assets/kids/collection3.png";
import gallery1 from "../../Assets/kids/gallery1.png";
import gallery2 from "../../Assets/kids/gallery2.png";
import gallery3 from "../../Assets/kids/gallery3.png";
import {
  AiOutlineHeart,
  AiFillStar,
  AiOutlineStar,
  AiOutlineSearch,
  AiOutlineFilter,
} from "react-icons/ai";

const Kids = () => {
  const [cartItems, setCartItems] = useState({});
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const items = [
    {
      id: 1,
      image: baseball,
      name: "Baseball",
      description: "Cool baseball for kids.",
      price: "Rs.10",
      rating: 4,
    },
    {
      id: 2,
      image: cricketball,
      name: "Cricket Ball",
      description: "Best cricket ball for practice.",
      price: "Rs.12",
      rating: 4.5,
    },
    {
      id: 3,
      image: accessories1,
      name: "Accessory 1",
      description: "Stylish accessory for kids.",
      price: "Rs.5",
      rating: 3.5,
    },
    {
      id: 4,
      image: accessories2,
      name: "Accessory 2",
      description: "Fun accessory for playtime.",
      price: "Rs.8",
      rating: 4,
    },
  ];

  const galleryImages = [gallery1, gallery2, gallery3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % galleryImages.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const handleAddToCart = (itemId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: 1,
    }));
  };

  const handleCartChange = (itemId, change) => {
    setCartItems((prevItems) => {
      const newQuantity = (prevItems[itemId] || 0) + change;
      if (newQuantity > 0) {
        return { ...prevItems, [itemId]: newQuantity };
      } else {
        const updatedItems = { ...prevItems };
        delete updatedItems[itemId];
        return updatedItems;
      }
    });
  };

  const handleAddToWishlist = (itemId) => {
    setWishlistItems((prevWishlistItems) =>
      prevWishlistItems.includes(itemId)
        ? prevWishlistItems
        : [...prevWishlistItems, itemId]
    );
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - filledStars - halfStar;

    return (
      <>
        {[...Array(filledStars)].map((_, index) => (
          <AiFillStar key={`filled-${index}`} className="star-icon filled" />
        ))}
        {halfStar ? <AiFillStar className="star-icon filled-half" /> : null}
        {[...Array(emptyStars)].map((_, index) => (
          <AiOutlineStar key={`empty-${index}`} className="star-icon" />
        ))}
      </>
    );
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const handlePrevItem = () => {
    setCurrentItemIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleNextItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="kids">
      <img src={kidbanner} alt="Kids Banner" className="kids-banner" />

      {showPopup && <div className="wishlist-popup">Added to Wishlist</div>}

      <div className="kids-page">
        <div className="filters">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <AiOutlineSearch className="search-icon" onClick={handleSearch} />
          <AiOutlineFilter
            className="filter-icon"
            onClick={() => setShowFilters(!showFilters)}
          />
          {showFilters && (
            <div className="filter-options">
              {/* Filter options code here */}
            </div>
          )}
        </div>

        <div className="explore-collection">
          <h3>EXPLORE KIDS COLLECTION</h3>
          <div className="collection-images">
            <img
              src={collection1}
              alt="Collection 1"
              className="collection-image"
            />
            <img
              src={collection2}
              alt="Collection 2"
              className="collection-image"
            />
            <img
              src={collection3}
              alt="Collection 3"
              className="collection-image"
            />
          </div>
        </div>

        <div
          className="kids-gallery"
          style={{
            backgroundImage: `url(${galleryImages[currentImageIndex]})`,
          }}
        >
          <div className="gallery-heading">Kids Collection</div>
          <button className="shop-now-button">Shop Now</button>
          <div
            className="prev-icon arrow-icon"
            onClick={() =>
              setCurrentImageIndex(
                (currentImageIndex - 1 + galleryImages.length) %
                  galleryImages.length
              )
            }
          >
            &#9664;
          </div>
          <div
            className="next-icon arrow-icon"
            onClick={() =>
              setCurrentImageIndex(
                (currentImageIndex + 1) % galleryImages.length
              )
            }
          >
            &#9654;
          </div>
        </div>

        <div className="kids-two-column">
          <div className="left-column">
            <h3>Kids T-Shirts</h3>
          </div>

          <div className="right-column">
            {items.map((item) => (
              <div key={item.id} className="item-box">
                <div className="image-container">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                  />
                  <AiOutlineHeart
                    className={`wishlist-icon ${
                      wishlistItems.includes(item.id) ? "wishlist-active" : ""
                    }`}
                    onClick={() => handleAddToWishlist(item.id)}
                  />
                  <div className="star-rating">{renderStars(item.rating)}</div>
                </div>
                <div className="thumbnail-box">
                  <img
                    src={item.image}
                    alt={`${item.name} thumbnail`}
                    className="thumbnail-image"
                  />
                </div>
                <div className="details">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p className="price">Price: {item.price}</p>
                  <div className="add-to-cart-section">
                    {cartItems[item.id] ? (
                      <div className="cart-quantity">
                        <button onClick={() => handleCartChange(item.id, -1)}>
                          -
                        </button>
                        <span>{cartItems[item.id]}</span>
                        <button onClick={() => handleCartChange(item.id, 1)}>
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        className="add-to-cart-button"
                        onClick={() => handleAddToCart(item.id)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kids;
