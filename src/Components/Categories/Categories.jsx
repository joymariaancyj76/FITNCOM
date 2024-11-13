import React, { useState } from 'react';
import './Categories.css';
import kids from '../../Assets/kids.png';
import teen from '../../Assets/teen.png';
import adult from '../../Assets/adult.png';
import outdoor from '../../Assets/outdoor.png';
import indoor from '../../Assets/indoor.png';

const Categories = () => {
  const [showIndoor, setShowIndoor] = useState(false);
  const [showOutdoor, setShowOutdoor] = useState(false);

  return (
    <div className="category-section">
      <div className="category-item">
        <img src={kids} alt="Kids" />
        <p>Kids</p>
      </div>
      <div className="category-item">
        <img src={teen} alt="Teen" />
        <p>Teen</p>
      </div>
      <div className="category-item">
        <img src={adult} alt="Adult" />
        <p>Adult</p>
      </div>
      <div
        className="category-item"
        onMouseEnter={() => setShowIndoor(true)}
        onMouseLeave={() => setShowIndoor(false)}
      >
        <img src={indoor} alt="Indoor Games" />
        <p>Indoor Games</p>
        {showIndoor && (
          <div className="dropdown">
            <p>Carrom</p>
            <p>Chess</p>
          </div>
        )}
      </div>
      <div
        className="category-item"
        onMouseEnter={() => setShowOutdoor(true)}
        onMouseLeave={() => setShowOutdoor(false)}
      >
        <img src={outdoor} alt="Outdoor Games" />
        <p>Outdoor Games</p>
        {showOutdoor && (
          <div className="dropdown">
            <p>Cricket</p>
            <p>Badminton</p>
            <p>Basketball</p>
            <p>Tennis</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
