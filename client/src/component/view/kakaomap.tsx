import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Kakaomap = () => {
  const [mapData, setMapData] = useState('');

  useEffect(() => {
    async function fetchMap() {
      const response = await axios.get('http://localhost:3000/map');
      if (response.status === 200) {
        setMapData(response.data);
      }
    }
    fetchMap();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: mapData }} />;
};

export default Kakaomap;
