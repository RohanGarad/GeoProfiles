import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = { lat: 28.6129, lng: 77.2295 };

const MapComponent = ({ latitude, longitude }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey
  });

  const [center, setCenter] = useState(defaultCenter);
  const [message, setMessage] = useState("Select a profile to view location");

  useEffect(() => {
    if (latitude && longitude && !isNaN(latitude) && !isNaN(longitude)) {
      setCenter({ lat: latitude, lng: longitude });
      setMessage(""); // Hide message when a valid location is selected
    } else {
      setCenter(defaultCenter);
      setMessage("Select a profile to view location");
    }
  }, [latitude, longitude]);

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <div className="relative">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
      {message && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow-md text-gray-800">
          {message}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
