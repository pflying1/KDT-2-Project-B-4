import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MapComponent = () => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    async function fetchMap() {
      const response = await axios.get(`http://localhost:3000/main`);
      if (response.status === 200) {
        setMapData(response.data);
      }
    }
    fetchMap();
  }, []);

  return (
    <div>
      {mapData ? (
        <img src={mapData} alt="지도" />
      ) : (
        <p>지도를 불러오는 중...</p>
      )}
    </div>
  );
};
export default MapComponent;