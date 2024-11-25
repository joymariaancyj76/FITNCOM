import React from "react";
import "./ProductsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const ProductsPage = () => {
  const products = [
    { id: 1, name: "Product 1", image: "product1.jpg", rating: 4.5 },
    { id: 2, name: "Product 2", image: "product2.jpg", rating: 4.0 },
    // Add more products here
  ];

  return (
    <div className="products-page">
      <div className="filters-column">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search products" />
        </div>

        <div className="filter-section">
          <h3>Filter by Price</h3>
          <p>Rs. 100 - Rs. 100000</p>
        </div>

        <div className="filter-section">
          <h3>Filter by Games</h3>
          <ul>
            <li>Cricket</li>
            <li>Basketball</li>
            <li>Football</li>
            <li>Badminton</li>
            <li>Volleyball</li>
            <li>Tennis</li>
            <li>Table Tennis</li>
          </ul>
        </div>

        <div className="filter-section">
          <h3>Filter by Rating</h3>
          <input type="range" min="1" max="5" />
          <p>Rating: 1 - 5</p>
        </div>
      </div>

      <div className="products-column">
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>Rating: {product.rating}</p>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button>Previous</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
