// import React, { useEffect, useRef } from 'react';
// import { kakao } from '@types/kakao-js-sdk';

// const Map: React.FC = () => {
//   const mapContainer = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.async = true;
//     script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=ceec6de44d3f7b655b54bf75e1d12581&autoload=false`;
//     document.head.appendChild(script);

//     script.onload = () => {
//       window.kakao.maps.load(() => {
//         const options = {
//           center: new window.kakao.maps.LatLng(36.35, 127.385), // 초기 지도 중심 좌표
//           level: 3, // 초기 지도 확대 레벨
//         };

//         const map = new window.kakao.maps.Map(mapContainer.current!, options);
//       });
//     };
//   }, []);

//   return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
// };

// export default Map;



// import React from 'react';

// const Map = () => {
//   const mapContainer = React.useRef(null);

//   React.useEffect(() => {
//     const script = document.createElement('script');
//     script.async = true;
//     script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=ceec6de44d3f7b655b54bf75e1d12581&autoload=false`; 
//     document.head.appendChild(script);

//     script.onload = () => {
//       window.kakao.maps.load(() => {
//         const options = {
//           center: new window.kakao.maps.LatLng(36.35, 127.385), // 초기 지도 중심 좌표
//           level: 3, // 초기 지도 확대 레벨
//         };

//         const map = new window.kakao.maps.Map(mapContainer.current, options);
//         console.log("마커")
//       });
//     };
//   }, []);

//   return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
// };

// export default Map;



// import React from 'react';

// const Map = () => {
//   const mapContainer = React.useRef(null);

//   React.useEffect(() => {
//     const script = document.createElement('script');
//     script.async = true;
//     script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=ceec6de44d3f7b655b54bf75e1d12581&autoload=false`;
//     document.head.appendChild(script);

//     script.onload = () => {
//       window.kakao.maps.load(() => {
//         const options = {
//           center: new window.kakao.maps.LatLng(36.35, 127.385), // 초기 지도 중심 좌표
//           level: 3, // 초기 지도 확대 레벨
//         };

//         const map = new window.kakao.maps.Map(mapContainer.current, options);

//         const apiKey = 'i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D';
//         const apiUrl = 'http://openapitraffic.daejeon.go.kr/api/rest/arrive/getArrInfoByStopID?serviceKey=i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D&BusStopID=8001378';

//         if (typeof fetch !== 'undefined') {
//           fetch(apiUrl, {
//               headers: {
//                   'Authorization': `Bearer ${apiKey}`
//               }
//           })
//               .then(response => response.text())
//               .then(xmlData => {
//                   const parser = new window.DOMParser();
//                   const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

//                   const msgHeader = xmlDoc.getElementsByTagName('msgHeader')[0];
//                   const msgBody = xmlDoc.getElementsByTagName('msgBody')[0];
//                   const itemList = msgBody.getElementsByTagName('itemList')[0];

//                   console.log(msgHeader);
//                   console.log(itemList);
//               })
//               .catch(error => {
//                   console.error(error);
//               });
//         } else {
//           console.error('Fetch API is not available in this environment.');
//         }
//       });
//     };
//   }, []);

//   return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
// };

// export default Map;

import React from 'react';
import GpsData from './busStopData';
const Map = () => {
  const mapContainer = React.useRef(null);

  // 원하는 위치 정보를 이 배열에 추가하세요. 예시: { lat: 36.35, lng: 127.385 }
  const locations = [
    { lat: 36.35, lng: 127.385 },
    { lat: 36.36, lng: 127.386 },
    { lat: 36.37, lng: 127.387 },
  ];
  console.log(GpsData);
  const createMarkers = (map) => {
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
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
};

export default Map;









