import React, { useState, useEffect } from "react"; // Ensure useEffect is imported here
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // Import star icons
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import "./CricketDetail.css";

// Import product images
import product1 from "../../Assets/Images/bat png.png";
import product2 from "../../Assets/Images/bat png.png";
import product3 from "../../Assets/Images/bat png.png";
import product4 from "../../Assets/Images/bat png.png";
import product5 from "../../Assets/Images/bat png.png";
import product6 from "../../Assets/Images/bat png.png";
import productH from "../../Assets/Images/bat png.png";
import productSH from "../../Assets/Images/bat png.png";
import productLH from "../../Assets/Images/bat png.png";

const productDescriptions = {
  1: {
    name: "PROFLEX BAT",
    description:
      "Ideal for children aged 4-5 years old, suitable for heights 4ft - 4ft 3in.",
    specs: {
      height: "25 1/4 inches",
      width: "3 1/2 inches",
      weight: "Lightweight",
      material: "Willow",
    },
    price: "Rs. 2000",
    image: product1,
  },
  2: {
    name: "PROFLEX BAT",
    description:
      "Perfect for children aged 6-7 years, suitable for heights 4ft 3in - 4ft 6in.",
    specs: {
      height: "27 3/4 inches",
      width: "3 1/2 inches",
      weight: "Lightweight",
      material: "Willow",
    },
    price: "Rs. 2200",
    image: product2,
  },
  3: {
    name: "PROFLEX BAT",
    description:
      "Designed for children aged 8-9 years, suitable for heights 4ft 6in - 4ft 9in.",
    specs: {
      height: "28 3/4 inches",
      width: "3 3/4 inches",
      weight: "Medium",
      material: "Kashmir Willow",
    },
    price: "Rs. 2500",
    image: product3,
  },
  4: {
    name: "PROFLEX BAT",
    description:
      "Best for children aged 9-10 years, suitable for heights 4ft 9in - 4ft 11in.",
    specs: {
      height: "29 3/4 inches",
      width: "3 3/4 inches",
      weight: "Medium",
      material: "English Willow",
    },
    price: "Rs. 2800",
    image: product4,
  },
  5: {
    name: "PROFLEX BAT",
    description:
      "Great for kids aged 10-11 years, suitable for heights 4ft 11in - 5ft 2in.",
    specs: {
      height: "30 3/4 inches",
      width: "4 inches",
      weight: "Medium",
      material: "English Willow",
    },
    price: "Rs. 3000",
    image: product5,
  },
  6: {
    name: "PROFLEX BAT",
    description:
      "For players aged 11-13 years, suitable for heights 5ft 2in - 5ft 4in.",
    specs: {
      height: "31 3/4 inches",
      width: "4 inches",
      weight: "Heavy",
      material: "Grade A Willow",
    },
    price: "Rs. 3500",
    image: product6,
  },
  H: {
    name: "PROFLEX BAT",
    description:
      "Harrow size for players aged 12-14 years, heights 5ft 4in - 5ft 8in.",
    specs: {
      height: "32 3/4 inches",
      width: "4 1/6 inches",
      weight: "Heavy",
      material: "Grade A Willow",
    },
    price: "Rs. 4000",
    image: productH,
  },
  SH: {
    name: "SHORT HAND BAT",
    description: "Short handle for players 15+ years, heights 5ft 8in - 6ft.",
    specs: {
      height: "33 1/2 inches",
      width: "4 1/4 inches",
      weight: "Heavy",
      material: "Premium Willow",
    },
    price: "Rs. 4500",
    image: productSH,
  },
  LH: {
    name: "PROFLEX BAT",
    description:
      "Long handle for players 15+ years, heights 6ft 4in and above.",
    specs: {
      height: "34 3/8 inches",
      width: "4 1/4 inches",
      weight: "Heavy",
      material: "Premium Willow",
    },
    price: "Rs. 5000",
    image: productLH,
  },
};

const relatedProducts = [
  { id: 1, name: "ProFlex Ball", price: "Rs. 500", image: product1 },
  { id: 2, name: "ProFlex Gloves", price: "Rs. 1200", image: product2 },
  { id: 3, name: "ProFlex Pads", price: "Rs. 1500", image: product3 },
  { id: 4, name: "ProFlex Helmet", price: "Rs. 2500", image: product4 },
];

function CricketDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [wishlistMessage, setWishlistMessage] = useState("");
  const [cartMessage, setCartMessage] = useState("");
  const productSizes = [1, 2, 3, 4, 5, 6, "H", "SH", "LH"];

  useEffect(() => {
    const fetchProductDetails = () => {
      if (productDescriptions[productId]) {
        setProduct(productDescriptions[productId]);
      } else {
        setError("Product not found");
      }
      setLoading(false);
    };
    fetchProductDetails();
  }, [productId]);

  const handleAddToWishlist = () => {
    setWishlistMessage("Added to Wishlist");
    setTimeout(() => setWishlistMessage(""), 3000);
  };

  const handleAddToCart = () => {
    setCartMessage("Added to Cart Successfully");
    setTimeout(() => setCartMessage(""), 3000);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const { name, description, specs = {}, price, image } = product;

  return (
    <div className="product-detail-page">
      {wishlistMessage && (
        <div className="popup-message">{wishlistMessage}</div>
      )}
      {cartMessage && <div className="popup-message">{cartMessage}</div>}

      <header className="product-header">
        <img src={image} alt={name} className="product-image" />
        <div className="product-info">
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="product-price">Price: {price}</div>
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) =>
              i < 4.5 ? (
                <FaStar key={i} className="star-icon filled" />
              ) : (
                <FaStarHalfAlt key={i} className="star-icon filled" />
              )
            )}
          </div>
          <div className="product-controls">
            <div className="quantity-selector">
              <button
                className="minus-btn"
                onClick={() => setQuantity(Math.max(quantity - 1, 1))}
              >
                -
              </button>
              <div>{quantity}</div>
              <button
                className="plus-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <div className="size-selector">
              {productSizes.map((e) => (
                <div className="product-sizes">{e}</div>
              ))}
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="add-to-wishlist" onClick={handleAddToWishlist}>
              Add to Wishlist
            </button>
          </div>
        </div>
      </header>

      <section className="product-description">
        <h3>Specifications</h3>
        <p>{`A cricket bat is a long, rectangular, paddle-shaped piece of equipment used by batters to hit the ball in cricket: 
Shape: A long, rectangular blade with a short handle 
Material: Usually made of willow 
Size: The bat can't be longer than 38 inches (96.5 cm) or wider than 4.25 inches (10.8 cm) 
Weight: A cricket bat usually weighs between 2.63–3 lb (1.19-1.36 kg) 
History: The term "cricket bat" was first used in 1622, and the bat's use was first mentioned in 1624 
Purpose: Batters use the bat to hit the ball, or to avoid a run out gby touching the ground with it `}</p>
      </section>

      <section className="product-specifications">
        <h3>Specifications</h3>
        <p>
          <strong>Height:</strong> {specs.height || "N/A"}
        </p>
        <p>
          <strong>Width:</strong> {specs.width || "N/A"}
        </p>
        <p>
          <strong>Weight:</strong> {specs.weight || "N/A"}
        </p>
        <p>
          <strong>Material:</strong> {specs.material || "N/A"}
        </p>
      </section>

      <section className="related-products">
        <h2>Related Products</h2>
        <div className="related-products-list">
          {relatedProducts.map((product) => (
            <div key={product.id} className="related-product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CricketDetail;
