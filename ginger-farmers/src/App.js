import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState(null);
  
  useEffect(() => {
    if ('geolocation' in navigator) {
      window.navigator.geolocation.getCurrentPosition((success) => {
        const lat = success.coords.latitude;
        const lng = success.coords.longitude;
        return setLocation({lat, lng})
        if (!success.coords.latitude || !success.coords.longitude) return;
      });
    }
  }, [setLocation]);
 console.log(location)
  return (
    <div className="App ba shadow-5 bg-green">
      <p className='white'>Plateau Ginger Farmers</p>
      <h3 className='f2 white'>Your current location is: </h3>
      <h1 className='f4 white'>{ `Latitude: ${location ? location.lat : null}`}</h1>
      <h1 className='f4 white'>{ `Longitude: ${location ? location.lng : null}`}</h1>
    </div>
  );
}

export default App;
