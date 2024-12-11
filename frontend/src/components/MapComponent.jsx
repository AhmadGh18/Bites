// src/MapComponent.jsx
import React from "react";

// Set default icon for Leaflet

const MapComponent = () => {
  const position = [33.8547, 35.8623]; // Coordinates for Lebanon

  return (
    <iframe
      className="w-[100%] h-[50vh]"
      src={`https://www.google.com/maps?q=${position[0]},${position[1]}&h1=es;z=14&output=embed`}
      title="Restaurant Location"
    ></iframe>
  );
};

export default MapComponent;
