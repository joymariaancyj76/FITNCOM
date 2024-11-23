import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';
import kidsImg from '../../Assets/kids.png';
import teenImg from '../../Assets/teen.png';
import adultImg from '../../Assets/adult.png';
import indoorImg from '../../Assets/indoor.png';
import outdoorImg from '../../Assets/outdoor.png';

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h1>Our Product Categories</h1>
      
      <div className="products-container">
        <div className="product-category">
          {/*<h1>Shop By Age</h1>*/}
          <h2>Kids</h2>
          <Link to="kids"> 
            <img src={kidsImg} alt="Kids" />
          </Link>
        </div>
        <div className="product-category">
          <h2>Teen</h2>
          <Link to="teen"> 
            <img src={teenImg} alt="Teen" />
          </Link>
        </div>
        <div className="product-category">
          <h2>Adult</h2>
          <Link to="adult"> 
            <img src={adultImg} alt="Adult" />
          </Link>
        </div>
      </div>

      <div className="products-container lower-row">
        <div className="product-category">
          {/*<h1>Shop By</h1>*/}
          <h2>Indoor Games</h2>
          <Link to="indoor"> 
            <img src={indoorImg} alt="Indoor Games" />
          </Link>
        </div>
        <div className="product-category">
          <h2>Outdoor Games</h2>
          <Link to="outdoor"> 
            <img src={outdoorImg} alt="Outdoor Games" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
