import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa"; // Importing necessary icons
import { Link } from "react-router-dom"; // Importing Link for routing
import "./CricketProduct.css";
import productimage from "../../Assets/Images/bat png.png";

const products = new Array(16).fill({
  name: "ProFlex Cricket Bat",
  price: "Rs. 1000/-",
  image: productimage,
  rating: 4.5, // Example rating, you can adjust for each product
});

function CricketProduct() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <FaStar key={`full-${index}`} className="star-icon filled" />
          ))}
        {halfStar ? (
          <FaStarHalfAlt key="half" className="star-icon half-filled" />
        ) : null}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <FaStar key={`empty-${index}`} className="star-icon empty" />
          ))}
      </>
    );
  };

  return (
    <div className="product-grid">
      <h1>CRICKET PRODUCTS</h1>
      <div className="grid-container">
        {currentProducts.map((product, index) => (
          <div key={index} className="grid-item">
            <div className="product-card">
              <Link to={`/products/${index + 1}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <div className="rating">{renderRating(product.rating)}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <div className="arrows">
          <FaArrowLeft
            className="arrow"
            onClick={handlePrev}
            disabled={currentPage === 1}
          />
          <FaArrowRight
            className="arrow"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          />
        </div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
}

export default CricketProduct;
