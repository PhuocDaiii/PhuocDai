import React from 'react'

import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './GSMContent.css'
const containerStyle = {
    width: '1200px',
    height: '150px'
  };
  
  const center = {
    lat: 10.80,
    lng: 106.70
  };
export default function GSMContent() {
    return (
        <div className="map">
        <LoadScript
        googleMapsApiKey="AIzaSyDbczLU679AT0Tub28jLlfTNAmyhDtq77Q"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
      </div>
    )
}
