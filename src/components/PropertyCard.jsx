import React from 'react';

const PropertyCard = ({ property }) => (
  <div className="property-card">
    <h2>{property.name}</h2>
    <p>{property.description}</p>
    {/* Add image if needed */}
  </div>
);

export default PropertyCard;