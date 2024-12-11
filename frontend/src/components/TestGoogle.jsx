import React, { useEffect } from "react";

const TestGoogle = () => {
  const positions = [
    { lat: 33.33, lng: 31.3 }, // Example positions in Lebanon
    { lat: 34.4, lng: 33.12 },
    { lat: 33.5, lng: 33.2345 },
  ];

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.8842, lng: 35.4946 }, // Center of Lebanon
        zoom: 8,
        maxzoom: 11,
      });

      // Adjusted bounds to minimize sea visibility
      const bounds = {
        north: 34.5, // Northernmost point in Lebanon
        south: 33.0, // Southernmost point in Lebanon
        east: 35.7, // Easternmost point in Lebanon
        west: 35.1, // Westernmost point in Lebanon
      };
      map.fitBounds(bounds); // Fit the map to the bounds

      // Add markers for each position
      positions.forEach((pos) => {
        new window.google.maps.Marker({
          position: pos,

          map: map,
        });
      });

      // Restrict the map within the bounds to prevent panning out of Lebanon
      google.maps.event.addListener(map, "bounds_changed", function () {
        if (map.getBounds()) {
          const sw = map.getBounds().getSouthWest();
          const ne = map.getBounds().getNorthEast();

          // Check if the map goes out of bounds
          if (
            sw.lat() < bounds.south ||
            sw.lng() < bounds.west ||
            ne.lat() > bounds.north ||
            ne.lng() > bounds.east
          ) {
            map.setCenter({ lat: 33.8842, lng: 35.4946 }); // Reset the center to Lebanon
            map.fitBounds(bounds); // Keep the bounds intact
          }
        }
      });
    };

    // Load the Google Maps script
    const loadScript = (url) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
      script.onload = initMap; // Initialize map once the script loads
    };

    loadScript("https://maps.googleapis.com/maps/api/js"); // No API key here
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "30%", height: "50vh" }}></div>
    </div>
  );
};

export default TestGoogle;
