import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties }) => (
  <div>
    {properties.map((p, idx) => (
      <PropertyCard key={idx} property={p} />
    ))}
  </div>
);

export default PropertyList;