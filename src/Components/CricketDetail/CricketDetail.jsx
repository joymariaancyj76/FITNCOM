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
const CricketBatDetails = () => {
  const bats = [
    {
      size: "Size 1",
      title: "Cricket Bat for Kids",
      preciseDescription:
        "Lightweight Kashmir willow cricket bat designed for kids aged 4-5 years. Perfect for beginners to start their cricket journey with confidence and comfort.",
      enhancedDescription:
        "Ideal for young cricket enthusiasts aged 4-5 years and 4 ft - 4 ft 3 in tall, this Size 1 cricket bat is crafted from premium Kashmir willow for durability and precision. The lightweight design ensures effortless handling and control, making it the perfect choice for beginners. It features a comfortable grip, making it suitable for friendly games, practice sessions, or fun backyard cricket. Its compact size and sturdy build help budding players develop their batting skills while having fun. Buy now to give your little one the ultimate cricket experience!",
      price: "Rs. 2000",
      image: "https://i.ibb.co/kgQY3dT/bat-png.png",
      specifications: [
        {
          heading: "Specifications",
          details: [
            "Age: 4-5 years",
            "Height of Player: 4 ft - 4 ft 3 in",
            "Bat Length: 25 1/4 inches",
            "Bat Width: 3 1/2 inches",
            "Material: Kashmir Willow",
          ],
        },
        {
          heading: "Additional Features",
          details: [
            "Grip: Comfortable and non-slip for better handling",
            "Balance: Lightweight and well-balanced for easy swings",
            "Power: Optimized for beginners to deliver controlled shots",
          ],
        },
      ],
    },
    {
      size: "Size 2",
      title: "Lightweight Cricket Bat",
      preciseDescription:
        "A perfect cricket bat for kids aged 6-7 years. Lightweight and durable, designed for improving batting techniques.",
      enhancedDescription:
        "For young players aged 6-7 years and 4 ft 3 in - 4 ft 6 in tall, this Size 2 cricket bat is the ultimate choice to enhance their skills. Constructed with high-quality Kashmir willow, it offers exceptional durability and a lightweight feel, ensuring ease of use. Its well-balanced design and comfortable grip allow children to practice confidently, whether at home, in school matches, or local games. Give your little cricketer the edge with this beginner-friendly, premium bat!",
      price: "Rs. 2200",
      image: "https://i.ibb.co/kgQY3dT/bat-png.png",
      specifications: [
        {
          heading: "Specifications",
          details: [
            "Age: 6-7 years",
            "Height of Player: 4 ft 3 in - 4 ft 6 in",
            "Bat Length: 27 3/4 inches",
            "Bat Width: 3 1/2 inches",
            "Material: Kashmir Willow",
          ],
        },
        {
          heading: "Additional Features",
          details: [
            "Grip: Durable and easy-to-hold for young players",
            "Balance: Perfectly balanced for consistent practice",
            "Power: Suitable for smooth and controlled shots",
          ],
        },
      ],
    },
    {
      size: "Size 3",
      title: "Cricket Bat for Aspiring Players",
      preciseDescription:
        "Balanced cricket bat for kids aged 8-9 years. Helps develop batting skills with precision and control.",
      enhancedDescription:
        "Tailored for players aged 8-9 years and 4 ft 6 in - 4 ft 9 in tall, this Size 3 cricket bat is crafted to improve batting precision and power. Made from premium Kashmir willow, it offers a lightweight and durable construction, ensuring a smooth swing and enhanced control. Ideal for young players transitioning to higher levels of play, this bat is perfect for practice sessions and local matches. Bring home this premium bat and let your child shine on the pitch!",
      price: "Rs. 2500",
      image: "https://i.ibb.co/kgQY3dT/bat-png.png",
      specifications: [
        {
          heading: "Specifications",
          details: [
            "Age: 8-9 years",
            "Height of Player: 4 ft 6 in - 4 ft 9 in",
            "Bat Length: 28 3/4 inches",
            "Bat Width: 3 3/4 inches",
            "Material: Kashmir Willow",
          ],
        },
        {
          heading: "Additional Features",
          details: [
            "Grip: Ergonomic design for superior comfort",
            "Balance: Lightweight and stable for precision shots",
            "Power: Enhanced power for advancing players",
          ],
        },
      ],
    },
    {
      size: "Size 4",
      title: "Junior Cricket Bat",
      preciseDescription:
        "Durable and lightweight cricket bat for kids aged 9-10 years. Perfect for improving batting techniques and confidence.",
      enhancedDescription:
        "Perfect for players aged 9-10 years and 4 ft 9 in - 4 ft 11 in tall, this Size 4 cricket bat is built for aspiring junior cricketers. Made with high-quality Kashmir willow, it combines lightweight design with excellent durability for smooth handling. The bat’s well-balanced build and sturdy grip make it the ideal companion for school matches and practice sessions. Elevate your young cricketer’s performance with this versatile and reliable bat!",
      price: "Rs. 2500",
      image: "https://i.ibb.co/kgQY3dT/bat-png.png",
      specifications: [
        {
          heading: "Specifications",
          details: [
            "Age: 9-10 years",
            "Height of Player: 4 ft 9 in - 4 ft 11 in",
            "Bat Length: 29 3/4 inches",
            "Bat Width: 3 3/4 inches",
            "Material: Kashmir Willow",
          ],
        },
        {
          heading: "Additional Features",
          details: [
            "Grip: Non-slip grip for confident play",
            "Balance: Perfect weight distribution for juniors",
            "Power: Ideal for improving shot power and technique",
          ],
        },
      ],
    },
    {
      size: "Size 5",
      title: "Cricket Bat for Pre-Teens (10-11 Years, 4 ft 11 in - 5 ft 2 in)",
      preciseDescription:
        "Powerful cricket bat for players aged 10-11 years. Designed for excellent balance and control on the field.",
      enhancedDescription:
        "Designed for pre-teens aged 10-11 years and 4 ft 11 in - 5 ft 2 in tall, this Size 5 cricket bat combines power and precision. Crafted from high-quality Kashmir willow, it features a lightweight yet durable design, offering great balance for confident shots. Whether in school matches or local tournaments, this bat helps players refine their techniques and build confidence on the pitch. A must-have for ambitious young cricketers!",
      price: "Rs. 2500",
      image: "https://i.ibb.co/kgQY3dT/bat-png.png",
      specifications: [
        {
          heading: "Specifications",
          details: [
            "Age: 10-11 years",
            "Height of Player: 4 ft 11 in - 5 ft 2 in",
            "Bat Length: 30 3/4 inches",
            "Bat Width: 4 inches",
            "Material: Kashmir Willow",
          ],
        },
        {
          heading: "Additional Features",
          details: [
            "Grip: Sturdy and slip-resistant for consistent play",
            "Balance: Well-distributed weight for precise shots",
            "Power: Optimized for competitive school matches",
          ],
        },
      ],
    },
    {
      size: "Size 6",
      title:
        "Advanced Cricket Bat for Juniors (11-13 Years, 5 ft 2 in - 5 ft 4 in)",
      preciseDescription:
        "Premium Kashmir willow bat for players aged 11-13 years. Lightweight and powerful for competitive matches.",
      enhancedDescription:
        "For juniors aged 11-13 years and 5 ft 2 in - 5 ft 4 in tall, this Size 6 cricket bat is designed for advanced-level play. Constructed from premium Kashmir willow, it delivers a powerful performance with enhanced durability. Its balanced design and comfortable grip allow players to execute precise shots, making it the perfect choice for competitive matches and intense practice sessions. Step up your game with this top-tier bat!",
      price: "Rs. 2500",
      image: "https://i.ibb.co/kgQY3dT/bat-png.png",
      specifications: [
        {
          heading: "Specifications",
          details: [
            "Age: 11-13 years",
            "Height of Player: 5 ft 2 in - 5 ft 4 in",
            "Bat Length: 31 3/4 inches",
            "Bat Width: 4 inches",
            "Material: Kashmir Willow",
          ],
        },
        {
          heading: "Additional Features",
          details: [
            "Grip: Textured grip for superior handling",
            "Balance: Engineered for stability and precision",
            "Power: Designed for powerful competitive shots",
          ],
        },
      ],
    },
    {
      size: "Harrow",
      title: "Cricket Bat for Teenagers (12-14 Years, 5 ft 4 in - 5 ft 6 in)",
      preciseDescription:
        "Professional-grade cricket bat for teens aged 12-14 years. Ensures powerful strokes and excellent durability.",
      enhancedDescription:
        "Perfect for teenagers aged 12-14 years and 5 ft 4 in - 5 ft 6 in tall, the Harrow bat offers exceptional balance, durability, and power. Made with premium Kashmir willow, it is designed for competitive play and helps young cricketers hone their skills. With its lightweight design and comfortable grip, this bat provides maximum control for consistent and powerful strokes on the pitch.",
      price: "Rs. 2500",
      image: "https://i.ibb.co/kgQY3dT/bat-png.png",
      specifications: [
        {
          heading: "Specifications",
          details: [
            "Age: 12-14 years",
            "Height of Player: 5 ft 4 in - 5 ft 6 in",
            "Bat Length: 32 3/4 inches",
            "Bat Width: 4 1/6 inches",
            "Material: Kashmir Willow",
          ],
        },
        {
          heading: "Additional Features",
          details: [
            "Grip: Soft and firm for confident strokes",
            "Balance: Lightweight yet stable for precise shots",
            "Power: Designed for consistent, powerful gameplay",
          ],
        },
      ],
    },
    {
      size: "SH",
      title: "Short Handle Cricket Bat",
      preciseDescription:
        "Professional-grade bat for players aged 15+ years, suitable for heights 5ft 6in - 6ft 1in. Crafted for explosive power and precision.",
      enhancedDescription:
        "Engineered with premium willow for optimal performance in competitive matches and intense practice. Lightweight and durable, ensuring unmatched control.",
      specifications: [
        {
          heading: "Specifications",
          details: [
            "Height: 33 1/2 inches",
            "Width: 4 1/4 inches",
            "Weight: Heavy",
            "Material: Premium Willow",
          ],
        },
        {
          heading: "Additional Features",
          details: [
            "Grip: Ergonomic Grip for Comfortable Handling",
            "Balance: Optimally Balanced for Swift Movements",
            "Power: Designed for Maximum Boundary Shots",
          ],
        },
      ],
      price: "Rs. 4500",
      image: "https://i.ibb.co/kgQY3dT/bat-png.png",
    },
    {
      size: "LH",
      title: "Long Handle Cricket Bat",
      preciseDescription:
        "Perfect for taller players aged 15+ years, suitable for heights 6ft 4in and above. Built for strength and superior performance.",
      enhancedDescription:
        "Features a longer handle and balanced design to deliver powerful strokes with ease. Made with high-quality premium willow for durability.",
      specifications: [
        {
          heading: "Specifications",
          details: [
            "Height: 34 3/8 inches",
            "Width: 4 1/4 inches",
            "Weight: Heavy",
            "Material: Premium Willow",
          ],
        },
        {
          heading: "Additional Features",
          details: [
            "Leverage: Long Handle for Enhanced Power",
            "Durability: Reinforced Edges for Extended Life",
            "Flexibility: Perfectly Balanced for Flexibility",
          ],
        },
      ],
      price: "Rs. 5000",
      image: "https://i.ibb.co/kgQY3dT/bat-png.png",
    },
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "ProFlex Ball",
      price: "Rs. 500",
      image: "https://i.ibb.co/kgQY3dT/bat-png.png",
    },
    {
      id: 2,
      name: "ProFlex Gloves",
      price: "Rs. 1200",
      image: "https://i.ibb.co/kgQY3dT/bat-png.png",
    },
    {
      id: 3,
      name: "ProFlex Pads",
      price: "Rs. 1500",
      image: "https://i.ibb.co/kgQY3dT/bat-png.png",
    },
    {
      id: 4,
      name: "ProFlex Helmet",
      price: "Rs. 2500",
      image: "https://i.ibb.co/kgQY3dT/bat-png.png",
    },
  ];

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
      const product = bats.find((bat) => bat.size === productId);
      if (product) {
        setProduct(product);
      } else {
        setError("Product not found");
      }
      setLoading(false);
    };
    fetchProductDetails();
  }, [productId]);

  const handleAddToWishlist = () => {
    const wishlistItem = {
      title,
      price,
      image,
      size: productId, // You can use productId or other details as needed
    };

    // Get the current wishlist from localStorage
    const currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Add the new item to the wishlist
    currentWishlist.push(wishlistItem);

    // Save the updated wishlist back to localStorage
    localStorage.setItem("wishlist", JSON.stringify(currentWishlist));

    setWishlistMessage("Added to Wishlist");
    setTimeout(() => setWishlistMessage(""), 3000);
  };

  const handleAddToCart = () => {
    setCartMessage("Added to Cart Successfully");
    setTimeout(() => setCartMessage(""), 3000);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const {
    title,
    preciseDescription,
    enhancedDescription,
    price,
    image,
    specifications,
  } = product;

  return (
    <div className="product-detail-page">
      {wishlistMessage && (
        <div className="popup-message">{wishlistMessage}</div>
      )}
      {cartMessage && <div className="popup-message">{cartMessage}</div>}

      <header className="product-header">
        <img src={image} alt={title} className="product-image" />
        <div className="product-info">
          <h1>{title}</h1>
          <p>{preciseDescription}</p>
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
        <h3>Description</h3>
        <p>{enhancedDescription}</p>

        <h3>Specifications</h3>
        {specifications.map((spec, index) => (
          <div key={index}>
            <h4>{spec.heading}</h4>
            <ul>
              {spec.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="related-products">
        <h3>Related Products</h3>
        <div className="related-products-list">
          {relatedProducts.map((product) => (
            <div key={product.id} className="related-product">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CricketBatDetails;
