import React, { useEffect, useRef } from 'react';
import axios from 'axios';

const KakaoMapComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMap = async () => {
      try {
        const response = await axios.get('/main');
        if (containerRef.current) {
          containerRef.current.innerHTML = response.data;
        }
      } catch (error) {
        console.error('Failed to fetch map:', error);
      }
    };

    fetchMap();
  }, []);

  return (
    <div ref={containerRef}></div>
  );
};

export default KakaoMapComponent;
