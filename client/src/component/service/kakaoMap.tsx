// import React, { useEffect } from 'react';

// const Map = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=ceec6de44d3f7b655b54bf75e1d12581';
//     script.async = true;
//     document.head.appendChild(script);

//     script.onload = () => {
//       const container = document.getElementById('map');
//       const options = {
//         center: new window.kakao.maps.LatLng(33.450701, 126.570667),
//         level: 3
//       };

//       const map = new window.kakao.maps.Map(container, options);
//     };
//   }, []);

//   return <div id="map" style={{ width: 800, height: 800 }}></div>;
// };

// export default Map;


import React,{ReactNode} from 'react';

interface MapProps {
  apiKey?: string;
}
const Map:  React.FC<MapProps> = ({ apiKey  })  => {
  const mapContainer = React.useRef(null);

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
          level: 3, // 초기 지도 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer.current, options);
      });
    };
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
};

export default Map;