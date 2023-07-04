import React, { useEffect, useState } from 'react';

interface MapData {
  latitude: number;
  longitude: number;
}

let  testa : any; 

const MapComponent: React.FC = () => {
  const [mapData, setMapData] = useState<MapData | null>(null);

  useEffect(() => {
    // 서버에서 데이터를 받아오는 비동기 함수 호출
    fetchMapData();
  }, []);

  const fetchMapData = async (): Promise<void> => {
    try {
      const response = await fetch('/main');
      
      if (!response.ok) {
        throw new Error('Failed to fetch map data: ' + response.statusText);
      }
      
      const data: MapData = await response.json();
      setMapData(data);
    } catch (error) {
      console.error('Failed to fetch map data:', error);
    }
  };

  useEffect(() => {
    if (mapData && typeof window !== 'undefined') {
      const mapContainer = document.getElementById('map');
      const mapOptions = {
        center: new window.kakao.maps.LatLng(mapData.latitude, mapData.longitude),
        level: 3,
      };

      if (mapContainer) {
        const map = new window.kakao.maps.Map(mapContainer, mapOptions);
        testa = map;
      }
    }
  }, [mapData]);

  return (
    <div>
      <div id="map" style={{ width: '852px', height: '400px' }}>
        {testa}
      </div>
    </div>
  );
};

export default MapComponent;
