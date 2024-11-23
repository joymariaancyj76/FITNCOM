import React, { useState, useEffect } from "react";
import "./Cricket.css";
import product1 from "../../Assets/bat png.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Cricket = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dummyProducts = [
      { id: 1, name: "Product 1", image: product1 },
      { id: 2, name: "Product 2", image: product1 },
      { id: 3, name: "Product 3", image: product1 },
      { id: 4, name: "Product 4", image: product1 },
      { id: 5, name: "Product 5", image: product1 },
      { id: 6, name: "Product 6", image: product1 },
      { id: 7, name: "Product 7", image: product1 },
      { id: 8, name: "Product 8", image: product1 },
    ];

    // Simulate fetching products
    setTimeout(() => {
      setProducts(dummyProducts);
    }, 100); // Slight delay before animation starts
  }, []);

  return (
    <div className="cricket-container">
      <div className="grid-container">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="grid-item"
            style={{ animationDelay: `${index * 0.08}s` }} // Staggered animation
          >
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) => {
                  if (i < Math.floor(product.rating)) {
                    return <FaStar key={i} className="star-icon filled" />;
                  } else if (
                    i < product.rating &&
                    i === Math.floor(product.rating)
                  ) {
                    return (
                      <FaStarHalfAlt key={i} className="star-icon filled" />
                    );
                  } else {
                    return <FaStar key={i} className="star-icon outlined" />;
                  }
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cricket;
