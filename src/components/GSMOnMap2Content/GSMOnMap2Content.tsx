import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './GSMOnMap2Content.css'


const containerStyle = {
    width: '1110px',
    height: '180px'
  };
  
  const center = {
    lat: 10.80,
    lng: 106.70
  };
export default function GSMOnMap2Content() {
    return (
        <div className="MapMapMap">
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
