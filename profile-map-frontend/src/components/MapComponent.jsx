import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const MapComponent = ({ latitude, longitude }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCswv0ENOrSq7ZozcSrxuaKByMuyjn2zzg'
  });

  const center = {
    lat: latitude || 0,
    lng: longitude || 0
  };

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MapComponent;
