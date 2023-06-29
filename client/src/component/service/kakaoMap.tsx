import React, { useEffect, useState } from 'react';
import Data from './busStopData';
interface MapProps {
  apiKey?: string;
}

const Map: React.FC<MapProps> = () => {

  const mapContainer = React.useRef(null);
  const [apiKey, setApiKey] = useState<string | undefined>(undefined);
  console.log(Data)
  useEffect(() => {
    fetch('/api/apiKey')
      .then((response) => response.json())
      .then((data) => {

        setApiKey(data.apiKey); // 수정: apiKey 값을 그대로 사용
      })
      .catch((error) => {
        console.error('Failed to fetch apiKey:', error);
      });
  }, []);

  // 원하는 위치 정보를 이 배열에 추가하세요. 예시: { lat: 36.35, lng: 127.385 }
  const locations = [
    { lat: 36.35, lng: 127.385 },
    { lat: 36.36, lng: 127.386 },
    { lat: 36.37, lng: 127.387 },
  ];
  // console.log(GpsData);
  const createMarkers = (map: any) => {
    locations.forEach((location) => {
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(location.lat, location.lng),
        map: map,
      });
    });
  };

  React.useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=ceec6de44d3f7b655b54bf75e1d12581&autoload=false`;
    document.head.appendChild(script);
    console.log(apiKey);
    script.onload = () => {
      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(36.35, 127.385), // 초기 지도 중심 좌표
          level: 7, // 수정된 지도 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer.current, options);

        // 함수를 호출하여 여러 개의 마커 생성
        createMarkers(map);
      });
    };
  },);

  // if (!apiKey) {
  //   return <div>Loading...</div>;
  // }

  // apiKey 값을 사용하여 지도 컴포넌트를 렌더링합니다.
  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
};

export default Map;

