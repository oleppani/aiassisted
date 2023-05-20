import React from 'react';

const CottageCard = ({ cottage }) => {
  return (
    <div className="cottage-card">
      <img src={cottage.image} alt={cottage.name} />
      <h3>{cottage.name}</h3>
      <p>{cottage.description}</p>
      <ul>
        {cottage.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
      <p>Price per night: {cottage.price}</p>
    </div>
  );
};

export default CottageCard;
