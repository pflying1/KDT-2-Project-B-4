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


import React, { useEffect, useState } from 'react';
import busLocationMarker from './busLocationMarker';
import BusLocationData from './busLocation';
interface BusData {
  ServiceResult: {
    msgHeader: {
      currentPage: string;
      headerCd: string;
      headerMsg: string;
      itemCnt: string;
      itemPageCnt: string;
    };
    msgBody: {
      itemList: [{
        ARR_TIME: number;
        BUS_NODE_ID: number;
        BUS_STOP_ID: number;
        DIR: number;
        EVT_CD: number;
        GPS_LATI: number;
        GPS_LONG: number;
        PLATE_NO: string;
        ROUTE_CD: number;
        STRE_DT: number;
        TOTAL_DIST: number;
        ud_type: number;
      }];
    };
  };
}
interface MapProps {
  apiKey?: string;
}

const Map: React.FC<MapProps> = () => {

  const mapContainer = React.useRef(null);
  const [apiKey, setApiKey] = useState<string | undefined>(undefined);
  const [mapData, setMapData] = useState<string | undefined>(undefined)

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




  React.useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    document.head.appendChild(script);
    console.log(apiKey);
    script.onload = () => {
      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(36.35, 127.385), // 초기 지도 중심 좌표
          level: 3, // 초기 지도 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer.current, options);
        setMapData(map)
        fetch('http://localhost:3000/api/bus')
        .then((response) => response.json())
        .then((data: BusData) => {
          data.ServiceResult.msgBody.itemList.map((busLocationInfo) => {
            busLocationMarker(busLocationInfo.GPS_LATI, busLocationInfo.GPS_LONG, map);
          });
        })
        .catch((error) => console.log(error));
        //버스 위치 마커 모듈
        // const busLocationInfo = BusLocationData();
        // busLocationMarker(36.350412, 127.384548, map);
        // busLocationMarker(busLocationInfo.GPS_LATI, busLocationInfo.GPS_LONG, map)
      });
    
      
    };
  }, [apiKey]);
  
/*   useEffect(() => {
    fetch('http://localhost:3000/api/bus')
      .then(response => response.json())
      .then((data: BusData) => {
      console.log(data.ServiceResult.msgBody.itemList);

      data.ServiceResult.msgBody.itemList.map((busLocationInfo) => {
      busLocationMarker(busLocationInfo.GPS_LATI, busLocationInfo.GPS_LONG, mapData);
      });
    })
    .catch((error) => console.log(error));
  }, []); */
    
  if (!apiKey) {
    return <div>Loading...</div>;
  }

  // apiKey 값을 사용하여 지도 컴포넌트를 렌더링합니다.
  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
};

export default Map;

