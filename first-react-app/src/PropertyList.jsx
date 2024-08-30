import React from "react";
import Property from "./Property";
import "./Property.css";

const PropertyList = ({ properties }) => {
  return (
    <div className="container">
      {properties.map((property) => (
        <Property
          key={property.id}
          id={property.id}
          name={property.name}
          rating={property.rating}
          price={property.price}
        />
      ))}
    </div>
  );
};

export default PropertyList;
