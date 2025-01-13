import React, { useState, useEffect } from 'react'; // Ensure useEffect is imported here
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Import star icons
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import './CricketDetail.css';

// Import product images
import product1 from '../../Assets/bat png.png';
import product2 from '../../Assets/bat 2.jpg';
import product3 from '../../Assets/bat png.png';
import product4 from '../../Assets/bat 2.jpg';
import product5 from '../../Assets/bat png.png';
import product6 from '../../Assets/bat png.png';
import productH from '../../Assets/bat png.png';
import productSH from '../../Assets/bat png.png';
import productLH from '../../Assets/bat png.png';

const productDescriptions = {
    1: {
      description: "Ideal for children aged 4-5 years old, suitable for heights 4ft - 4ft 3in.",
      height: "25 1/4 inches",
      width: "3 1/2 inches",
      weight: "Lightweight",
      material: "Willow",
      price: "Rs. 2000",
      image: product1,
    },
    2: {
      description: "Perfect for children aged 6-7 years, suitable for heights 4ft 3in - 4ft 6in.",
      height: "27 3/4 inches",
      width: "3 1/2 inches",
      weight: "Lightweight",
      material: "Willow",
      price: "Rs. 2200",
      image: product2,
    },
    3: {
      description: "Designed for children aged 8-9 years, suitable for heights 4ft 6in - 4ft 9in.",
      height: "28 3/4 inches",
      width: "3 3/4 inches",
      weight: "Medium",
      material: "Kashmir Willow",
      price: "Rs. 2500",
      image: product3,
    },
    4: {
      description: "Best for children aged 9-10 years, suitable for heights 4ft 9in - 4ft 11in.",
      height: "29 3/4 inches",
      width: "3 3/4 inches",
      weight: "Medium",
      material: "English Willow",
      price: "Rs. 2800",
      image: product4,
    },
    5: {
      description: "Great for kids aged 10-11 years, suitable for heights 4ft 11in - 5ft 2in.",
      height: "30 3/4 inches",
      width: "4 inches",
      weight: "Medium",
      material: "English Willow",
      price: "Rs. 3000",
      image: product5,
    },
    6: {
      description: "For players aged 11-13 years, suitable for heights 5ft 2in - 5ft 4in.",
      height: "31 3/4 inches",
      width: "4 inches",
      weight: "Heavy",
      material: "Grade A Willow",
      price: "Rs. 3500",
      image: product6,
    },
    H: {
      description: "Harrow size for players aged 12-14 years, heights 5ft 4in - 5ft 8in.",
      height: "32 3/4 inches",
      width: "4 1/6 inches",
      weight: "Heavy",
      material: "Grade A Willow",
      price: "Rs. 4000",
      image: productH,
    },
    SH: {
      description: "Short handle for players 15+ years, heights 5ft 8in - 6ft.",
      height: "33 1/2 inches",
      width: "4 1/4 inches",
      weight: "Heavy",
      material: "Premium Willow",
      price: "Rs. 4500",
      image: productSH,
    },
    LH: {
      description: "Long handle for players 15+ years, heights 6ft 4in and above.",
      height: "34 3/8 inches",
      width: "4 1/4 inches",
      weight: "Heavy",
      material: "Premium Willow",
      price: "Rs. 5000",
      image: productLH,
    }
  };

const relatedProducts = [
  { id: 1, name: 'ProFlex Ball', price: 'Rs. 500', image: product1 },
  { id: 2, name: 'ProFlex Gloves', price: 'Rs. 1200', image: product2 },
  { id: 3, name: 'ProFlex Pads', price: 'Rs. 1500', image: product3 },
  { id: 4, name: 'ProFlex Helmet', price: 'Rs. 2500', image: product4 },
];

function CricketDetail() {
    const { productId } = useParams(); // Get the productId from the URL
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null); // State to hold the product
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
  
    useEffect(() => {
      // Simulate a fetch operation (could be from an API)
      const fetchProductDetails = () => {
        try {
          if (productDescriptions[productId]) {
            setProduct(productDescriptions[productId]);
            setLoading(false);
          } else {
            throw new Error('Product not found');
          }
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };

      fetchProductDetails();
    }, [productId]);

    if (loading) return <div>Loading...</div>; // Loading state
    if (error) return <div>Error: {error}</div>; // Error handling for missing product

    const { name, description, height, width, weight, material, price, image } = product;
    const productRating = 4.5; // Example rating

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
      <div className="product-detail-page">
        <header className="product-header">
          <img src={image} alt={name} className="product-image" />
          <div className="product-info">
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="product-attributes">
              <p><strong>Height:</strong> {height}</p>
              <p><strong>Width:</strong> {width}</p>
              <p><strong>Weight:</strong> {weight}</p>
              <p><strong>Material:</strong> {material}</p>
            </div>
            <div className="product-controls">
              <div className="quantity-selector">
                <button onClick={handleDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease}>+</button>
              </div>
              <button className="add-to-cart">ADD TO CART</button>
              <button className="wishlist">WISHLIST</button>
            </div>
            <p><strong>Price:</strong> {price}</p>
            <div className="rating">
              {Array.from({ length: 5 }, (_, i) => (
                i < Math.floor(productRating) ? <FaStar key={i} className="star-icon filled" /> :
                (i < productRating && i === Math.floor(productRating)) ? <FaStarHalfAlt key={i} className="star-icon filled" /> :
                <FaStar key={i} className="star-icon outlined" />
              ))}
            </div>
          </div>
        </header>
  
        {/* Related Products Section */}
        <section className="related-products">
          <h2>Related Products</h2>
          <div className="related-products-list">
            {relatedProducts.map((product, index) => (
              <div 
                key={product.id} 
                className={`related-product ${index % 2 === 0 ? 'odd' : 'even'}`}
              >
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