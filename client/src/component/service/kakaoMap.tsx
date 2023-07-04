// import React, { useEffect, useState } from 'react';
// import busLocationMarker from './busLocationMarker';
// import busStopMarker from './busStopMarker';
// import BusLocationData from './busLocation';
// import uuid from "react-uuid"

// interface BusData {
//   ServiceResult: {
//     msgHeader: {
//       currentPage: string;
//       headerCd: string;
//       headerMsg: string;
//       itemCnt: string;
//       itemPageCnt: string;
//     };
//     msgBody: {
//       itemList: [{
//         ARR_TIME: number;
//         BUS_NODE_ID: number;
//         BUS_STOP_ID: number;
//         DIR: number;
//         EVT_CD: number;
//         GPS_LATI: number;
//         GPS_LONG: number;
//         PLATE_NO: string;
//         ROUTE_CD: number;
//         STRE_DT: number;
//         TOTAL_DIST: number;
//         ud_type: number;
//       }];
//     };
//   };
// }

// // interface BusStopData {
// //   ServiceResult: {
// //     msgHeader: {
// //       currentPage: string;
// //       headerCd: string;
// //       headerMsg: string;
// //       itemCnt: string;
// //       itemPageCnt: string;
// //     };
// //     msgBody: {
// //       itemList: [{
// //         BUSSTOP_ENG_NM: string;
// //         BUSSTOP_NM: string;
// //         BUSSTOP_SEQ: string;
// //         BUSSTOP_TP: string;
// //         BUS_NODE_ID: string;
// //         BUS_STOP_ID: string;
// //         GPS_LATI: number;
// //         GPS_LONG: number;
// //         ROAD_NM: string;
// //         ROAD_NM_ADDR: string;
// //         ROUTE_CD: string;
// //         TOTAL_DIST: string;
// //       }];
// //     };
// //   };
// // }
// //새오운 버전
// interface BusStopData {
//   BUSSTOP_ENG_NM: string[];
//   BUSSTOP_NM: string[];
//   BUS_NODE_ID: number[];
//   BUS_STOP_ID: string[];
//   GPS_LATI: number[];
//   GPS_LONG: number[];
//   ROUTE_CD: string[];
//   _id: string;
// }

// interface MapProps {
//   apiKey?: string;
// }



// const Map: React.FC<MapProps> = () => {

//   const mapContainer = React.useRef(null);
//   const [apiKey, setApiKey] = useState<string | undefined>(undefined);
//   const [mapData, setMapData] = useState<string | undefined>(undefined)

//   useEffect(() => {
//     let userID = localStorage.getItem('userID');
//     if (!userID) {
//       const newUserID = uuid();
//       localStorage.setItem('userID', newUserID);
//       userID = localStorage.getItem('userID');
//       console.log("ID값 없어서 새로 만들어짐: ", userID)
//     }

//     fetch('/api/apiKey')
//       .then((response) => response.json())
//       .then((data) => {

//         setApiKey(data.apiKey); // 수정: apiKey 값을 그대로 사용
//       })
//       .catch((error) => {
//         console.error('Failed to fetch apiKey:', error);
//       });
//   }, []);

//   /* // 원하는 위치 정보를 이 배열에 추가하세요. 예시: { lat: 36.35, lng: 127.385 }
//   const locations = [
//     { lat: 36.35, lng: 127.385 },
//     { lat: 36.36, lng: 127.386 },
//     { lat: 36.37, lng: 127.387 },
//   ];
//   // console.log(GpsData);
//   const createMarkers = (map: any) => {
//     locations.forEach((location) => {
//       const marker = new window.kakao.maps.Marker({
//         position: new window.kakao.maps.LatLng(location.lat, location.lng),
//         map: map,
//       });
//     });
//   }; */

//   React.useEffect(() => {
//     const script = document.createElement('script');
//     script.async = true;
//     script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=ceec6de44d3f7b655b54bf75e1d12581&autoload=false`;
//     document.head.appendChild(script);
//     // console.log(apiKey);
//     script.onload = () => {
//       window.kakao.maps.load(() => {
//         const options = {
//           center: new window.kakao.maps.LatLng(36.35, 127.385), // 초기 지도 중심 좌표
//           level: 7, // 수정된 지도 확대 레벨
//         };
//         const map = new window.kakao.maps.Map(mapContainer.current, options);

//         // 함수를 호출하여 여러 개의 마커 생성
//         // createMarkers(map);
//         setMapData(map)
 
//         //버스 위치 마커 모듈
//         // const busLocationInfo = BusLocationData();
//         // busLocationMarker(36.350412, 127.384548, map);
//         // busLocationMarker(busLocationInfo.GPS_LATI, busLocationInfo.GPS_LONG, map)


//         fetch('http://localhost:3000/busstation')
//           .then((response) => response.json())
//           .then((data) => {
//             // data.ServiceResult.msgBody.itemList.map((busStopInfo) => {
//             //   busStopMarker(busStopInfo.GPS_LATI, busStopInfo.GPS_LONG, map);
//             //   console.log('busStopInfo',busStopInfo);
//             //   console.log('data.ServiceResult.msgBody.itemList.map',data);

//             // });
//             // const itemList = data.ServiceResult.msgBody.itemList;
//             // itemList.forEach((busStopInfo) => {
//             //   // 데이터 가공 또는 출력 로직을 추가합니다.
//             // });
//             // console.log('이건 정류장 요청',itemList);

//             data.forEach((item: BusStopData) => {
//               const gpsLati = item.GPS_LATI[0]; // GPS_LATI 값 추출
//               const gpsLong = item.GPS_LONG[0]; // GPS_LONG 값 추출
//               const gpsBusName = item.BUSSTOP_NM[0]
//               const gpsBusNodeId = item.BUS_NODE_ID[0];
//               busStopMarker(gpsLati, gpsLong, gpsBusName, gpsBusNodeId, map); // 함수 호출
//             });
//             console.log(data)

//           })
//           .catch((error) => console.log(error));

//       });


//     };
//   }, [apiKey]);

//   /*   useEffect(() => {
//       fetch('http://localhost:3000/api/bus')
//         .then(response => response.json())
//         .then((data: BusData) => {
//         console.log(data.ServiceResult.msgBody.itemList);
  
//         data.ServiceResult.msgBody.itemList.map((busLocationInfo) => {
//         busLocationMarker(busLocationInfo.GPS_LATI, busLocationInfo.GPS_LONG, mapData);
//         });
//       })
//       .catch((error) => console.log(error));
//     }, []); */

//   if (!apiKey) {
//     return <div>Loading...</div>;
//   }

//   // apiKey 값을 사용하여 지도 컴포넌트를 렌더링합니다.
//   return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
// };

// export default Map;


import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import uuid from 'react-uuid';
// import busStopMarker from './busStopMarker';
import BusModal from '../view/busStopModal';
const socket = io('http://localhost:3000/busSocket');

interface BusStopData {
  BUSSTOP_ENG_NM: string[];
  BUSSTOP_NM: string[];
  BUS_NODE_ID: number[];
  BUS_STOP_ID: string[];
  GPS_LATI: number[];
  GPS_LONG: number[];
  ROUTE_CD: string[];
  _id: string;
}

interface MapProps {
  apiKey?: string;
}
let responseHandlerRegistered = false;
const MapWithMarkers: React.FC<MapProps> = () => {
  const mapContainer = React.useRef(null);
  const [apiKey, setApiKey] = useState<string | undefined>(undefined);
  const [mapData, setMapData] = useState<string | undefined>(undefined);

  useEffect(() => {
    let userID = localStorage.getItem('userID');
    if (!userID) {
      const newUserID = uuid();
      localStorage.setItem('userID', newUserID);
      userID = localStorage.getItem('userID');
      console.log("ID값 없어서 새로 만들어짐: ", userID)
    }

    fetch('/api/apiKey')
      .then((response) => response.json())
      .then((data) => {
        setApiKey(data.apiKey);
      })
      .catch((error) => {
        console.error('Failed to fetch apiKey:', error);
      });
  }, []);

  useEffect(() => {
    if (apiKey) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(() => {
          const options = {
            center: new window.kakao.maps.LatLng(36.35, 127.385),
            level: 7,
          };
          const map = new window.kakao.maps.Map(mapContainer.current, options);

          setMapData(map);
          fetch('http://localhost:3000/busstation')
            .then((response) => response.json())
            .then((data) => {
              data.forEach((item: BusStopData) => {
                const gpsLati = item.GPS_LATI[0];
                const gpsLong = item.GPS_LONG[0];
                const gpsBusName = item.BUSSTOP_NM[0];
                const gpsBusNodeId = item.BUS_NODE_ID[0];

                // 마커를 표시할 위치입니다
                const position = new window.kakao.maps.LatLng(gpsLati, gpsLong);

                // 마커를 생성합니다
                const marker = new window.kakao.maps.Marker({
                  position: position,
                  clickable: true,
                });

                // 마커를 지도에 표시합니다.
                marker.setMap(map);

                // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
                // const iwContent = `<div>버스정류소: ${gpsBusNodeId}</div>
                //   <div>정류소 이름: ${gpsBusName}</div>`;

                // const iwContent = <BusModal busStopName={busStopName} busStopNumber={busNodeId.toString()} />;
//     const iwRemoveable = true;

const infowindow = new window.kakao.maps.InfoWindow({
  content: `
  <div class="busModalWin" style=
    "width: 190px;height: 110px;  background-color: white;
    border-radius: 30px; 
    border: 1px solid #EF7F00;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:flex-start;
    padding: 1% 0 1% 0; " >
    <p className="title">${gpsBusName}</p>
    <div className="titleArea">
    <p className="busText">${gpsBusNodeId}</p>
    <p className="busText">{busWay}</p>
  </div>
`,
  removable: true,
  zIndex: 10,
});


                // const infowindow = new window.kakao.maps.InfoWindow({
                //   content: iwContent,
                //   removable: true,
                // });

                // 마커에 클릭이벤트를 등록합니다
                window.kakao.maps.event.addListener(marker, 'click', function () {
                  infowindow.open(map, marker);

                  // // 클릭한 버스 정류장 번호
                  // const numbersOnly = gpsBusNodeId.replace(/\D/g, '');
                  // console.log('버정 번호', numbersOnly);

                  // socket.emit('buttonClicked', { data: numbersOnly });

                  // setInterval(() => {
                  //   socket.emit('buttonClicked', { data: numbersOnly });
                  // }, 10000);

                  // if (!responseHandlerRegistered) {
                  //   socket.on('response', (response) => {
                  //     console.log('새로운 응답 도착:', response);
                  //     if (response && response[1]) {
                  //       for (let i = 0; i < response[1].length; i++) {
                  //         console.log('response[1][i].GPS_LATI', response[1][i].GPS_LATI);
                  //         console.log('response[1][i].GPS_LONG', response[1][i].GPS_LONG);
                  //         busStopMarker(response[1][i].GPS_LATI, response[1][i].GPS_LONG, map);
                  //       }
                  //       console.log('서버 응답:', response[1][0].GPS_LATI);
                  //     }
                  //   });
                  //   responseHandlerRegistered = true;
                  // }
                });
              });
              console.log(data);
            })
            .catch((error) => console.log(error));
        });
      };
    }
  }, [apiKey]);

  if (!apiKey) {
    return <div>Loading...</div>;
  }

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
};

export default MapWithMarkers;


// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import uuid from 'react-uuid';
// import busStopMarker from './busStopMarker';

// const socket = io('http://localhost:3000/busSocket');

// interface BusStopData {
//   BUSSTOP_ENG_NM: string[];
//   BUSSTOP_NM: string[];
//   BUS_NODE_ID: number[];
//   BUS_STOP_ID: string[];
//   GPS_LATI: number[];
//   GPS_LONG: number[];
//   ROUTE_CD: string[];
//   _id: string;
// }

// interface MapProps {
//   apiKey?: string;
// }

// const MapWithMarkers: React.FC<MapProps> = () => {
//   const mapContainer = React.useRef(null);
//   const [apiKey, setApiKey] = useState<string | undefined>(undefined);
//   const [mapData, setMapData] = useState<string | undefined>(undefined);


//   useEffect(() => {
//     let userID = localStorage.getItem('userID');
//     if (!userID) {
//       const newUserID = uuid();
//       localStorage.setItem('userID', newUserID);
//       userID = localStorage.getItem('userID');
//       console.log("ID값 없어서 새로 만들어짐: ", userID)
//     }

//     fetch('/api/apiKey')
//       .then((response) => response.json())
//       .then((data) => {

//         setApiKey(data.apiKey); // 수정: apiKey 값을 그대로 사용
//       })
//       .catch((error) => {
//         console.error('Failed to fetch apiKey:', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (apiKey) {
//       const script = document.createElement('script');
//       script.async = true;
//       script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
//       document.head.appendChild(script);

//       script.onload = () => {
//         window.kakao.maps.load(() => {
//           // Your existing code for initializing the map and markers goes here...

//           const options = {
//             center: new window.kakao.maps.LatLng(36.35, 127.385), // 초기 지도 중심 좌표
//             level: 7, // 수정된 지도 확대 레벨
//           };
//           const map = new window.kakao.maps.Map(mapContainer.current, options);
  
//           // 함수를 호출하여 여러 개의 마커 생성
//           // createMarkers(map);
//           setMapData(map)
//           fetch('http://localhost:3000/busstation')
//             .then((response) => response.json())
//             .then((data) => {
//               data.forEach((item: BusStopData) => {
//                 const gpsLati = item.GPS_LATI[0];
//                 const gpsLong = item.GPS_LONG[0];
//                 const gpsBusName = item.BUSSTOP_NM[0];
//                 const gpsBusNodeId = item.BUS_NODE_ID[0];
//                 busStopMarker(gpsLati, gpsLong, gpsBusName, gpsBusNodeId, map);
//               });
//               console.log(data);
//             })
//             .catch((error) => console.log(error));
//         });
//       };
//     }
//   }, [apiKey]);

//   if (!apiKey) {
//     return <div>Loading...</div>;
//   }

//   return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
// };

// export default MapWithMarkers;