import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import the hook for navigation
import "./Cricket.css";
import product1 from "../../Assets/bat png.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Cricket = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log("selectedProduct:", selectedProduct);
  const navigate = useNavigate(); // Hook to navigate between pages

  useEffect(() => {
    const dummyProducts = [
      {
        id: 1,
        name: "Product 1",
        image: product1,
        rating: 4.5,
        price: "Rs. 2000",
      },
      {
        id: 2,
        name: "Product 2",
        image: product1,
        rating: 4,
        price: "Rs. 2500",
      },
      {
        id: 3,
        name: "Product 3",
        image: product1,
        rating: 3.5,
        price: "Rs. 1800",
      },
      {
        id: 4,
        name: "Product 4",
        image: product1,
        rating: 5,
        price: "Rs. 3000",
      },
      {
        id: 5,
        name: "Product 5",
        image: product1,
        rating: 4.2,
        price: "Rs. 2200",
      },
      {
        id: 6,
        name: "Product 6",
        image: product1,
        rating: 3.8,
        price: "Rs. 1500",
      },
      {
        id: 7,
        name: "Product 7",
        image: product1,
        rating: 4.7,
        price: "Rs. 3200",
      },
      {
        id: 8,
        name: "Product 8",
        image: product1,
        rating: 3,
        price: "Rs. 1700",
      },
    ];

    // Simulate fetching products
    setTimeout(() => {
      setProducts(dummyProducts);
    }, 100); // Slight delay before animation starts
  }, []);

  const closeDetails = () => setSelectedProduct(null);
  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`); // Correct URL structure
  };

  return (
    <div className="cricket-container">
      <div className="grid-container">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="grid-item"
            style={{ animationDelay: `${index * 0.08}s` }} // Staggered animation
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              onClick={() => handleProductClick(product.id)} // Navigate when clicked
              className="clickable-image"
            />
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

      {selectedProduct && (
        <div className="product-details-page-container slide-in">
          <div key={selectedProduct.id} className="product-details-content">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <div className="product-details">
              <p className="product-name">{selectedProduct.name}</p>
              <p className="product-desc">{`A cricket bat is a long, rectangular, paddle-shaped piece of equipment used by batters to hit the ball in cricket: 
Shape: A long, rectangular blade with a short handle 
Material: Usually made of willow 
Size: The bat can't be longer than 38 inches (96.5 cm) or wider than 4.25 inches (10.8 cm) 
Weight: A cricket bat usually weighs between 2.63–3 lb (1.19-1.36 kg) 
History: The term "cricket bat" was first used in 1622, and the bat's use was first mentioned in 1624 
Purpose: Batters use the bat to hit the ball, or to avoid a run out gby touching the ground with it `}</p>
              <p className="product-price">{selectedProduct.price}</p>
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) => {
                  if (i < Math.floor(selectedProduct.rating)) {
                    return <FaStar key={i} className="star-icon filled" />;
                  } else if (
                    i < selectedProduct.rating &&
                    i === Math.floor(selectedProduct.rating)
                  ) {
                    return (
                      <FaStarHalfAlt key={i} className="star-icon filled" />
                    );
                  } else {
                    return <FaStar key={i} className="star-icon outlined" />;
                  }
                })}
              </div>
              <div className="buttons-container">
                <button>Add to Cart</button>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cricket;
