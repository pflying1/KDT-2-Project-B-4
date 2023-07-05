import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import busMarker from './busLocationMarker';
import BusModal from '../view/busStopModal';
import ReactDOM from 'react-dom';
const socket = io('http://localhost:3000/busSocket'); // Socket.IO 서버에 연결합니다.
/**
 * 버스 위치를 나타내는 마커 모듈입니다.
 *
 * @param lati 위도입니다.
 * @param long 경도입니다.
 * @param busNodeId
 * @param busStopName
 * @param map 마커를 지도에 표시합니다. map이라고 꼭넣어주세요.
 */


 let responseHandlerRegistered = false;
const busLocationMarker = (lati: number, long: number, busStopName: string , busNodeId: number, map: string | undefined) => {
  console.log("버스 정류장 아이디" + busNodeId);
  
  let imageSrc = 'https://cdn-icons-png.flaticon.com/512/5390/5390754.png'; // 마커이미지의 주소입니다  
  let imageSize = new window.kakao.maps.Size(30, 30);
  
  let imageOption = {offset: new window.kakao.maps.Point(15, 15)}; 
    
  let markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

  const position = new window.kakao.maps.LatLng(lati, long);

  // 마커를 생성합니다
  const marker = new window.kakao.maps.Marker({
    position: position,
    clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    image: markerImage
  });

  // 서버로부터 응답을 받습니다.

  // 아래 코드는 위의 마커를 생성하는 코드에서 clickable: true 와 같이
  // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
  // marker.setClickable(true);

  // 마커를 지도에 표시합니다.
  marker.setMap(map);

  // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
  const iwContent = `<div>버스정류소 : ${busNodeId}</div> 
  <div> 정류소 이름: ${busStopName}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
  // let busStopNumber = `${busNodeId}`
  // const iwContent = busModal(busStopName, busStopNumber), 
  //   iwRemoveable = true;

  // 인포윈도우를 생성합니다
  const infowindow = new window.kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable
  });

  // 마커에 클릭이벤트를 등록합니다
  window.kakao.maps.event.addListener(marker, 'click', function () {
    // 마커 위에 인포윈도우를 표시합니다
    // console.log('이거는 in', infowindow.a);
    // console.log('이거는 in', infowindow.a.innerText);


    function extractNumbersFromString(str: string): string {
      const regex = /\d+/g;
      const numbers = str.match(regex);

      if (numbers) {
        return numbers.join('');
      } else {
        return '';
      }
    }
    const numbersOnly = extractNumbersFromString(infowindow.a.innerText);
    // 클릭한 버스 정류장 번호
    console.log('버정 번호', numbersOnly); // 출력: 8001091
    // socket.emit('button', { data: 'test' });
    
    socket.emit('buttonClicked', { data: numbersOnly });

    setInterval(() => {
      socket.emit('buttonClicked', { data: numbersOnly });
    }, 10000);

    if (!responseHandlerRegistered) {
      socket.on('response', (response) => {
        console.log('새로운 응답 도착:', response);
        if (response && response[1]) {
          for (let i = 0; i < response[1].length; i++) {
            console.log('response[1][i].GPS_LATI', response[1][i].GPS_LATI);
            console.log('response[1][i].GPS_LONG', response[1][i].GPS_LONG);
            busMarker(response[1][i].GPS_LATI, response[1][i].GPS_LONG, map);
          }
          console.log('서버 응답:', response[1][0].GPS_LATI);
          // 추가적인 작업을 수행할 수 있습니다.
        }

      });
      responseHandlerRegistered = true;
    }

  //   let content = BusModal;
  //   var customOverlay = new window.kakao.maps.CustomOverlay({
  //     position: position,
  //     content: content   
  // });

    infowindow.open(map, marker);
  });


  
}

export default busLocationMarker



// import React, { useEffect } from 'react';
// import io from 'socket.io-client';
// import BusMarker from './busLocationMarker';
// import BusModal from '../view/busStopModal';

// interface BusLocationMarkerProps {
//   lati: number;
//   long: number;
//   busStopName: string;
//   busNodeId: number;
//   map: string | undefined;
// }

// const socket = io('http://localhost:3000/busSocket');

// const BusLocationMarker: React.FC<BusLocationMarkerProps> = ({
//   lati,
//   long,
//   busStopName,
//   busNodeId,
//   map,
// }) => {
//   useEffect(() => {
//     const position = new window.kakao.maps.LatLng(lati, long);
//     const marker = new window.kakao.maps.Marker({
//       position: position,
//       clickable: true,
//     });
// console.log( lati,
//   long,
//   busStopName,
//   busNodeId,
//   map,);
//     marker.setMap(map);

//     const iwContent = <BusModal busStopName={busStopName} busStopNumber={busNodeId.toString()} />;
//     const iwRemoveable = true;

//     const infowindow = new window.kakao.maps.InfoWindow({
//       content: iwContent,
//       removable: iwRemoveable,
//     });

//     window.kakao.maps.event.addListener(marker, 'click', function () {
//       function extractNumbersFromString(str: string): string {
//         const regex = /\d+/g;
//         const numbers = str.match(regex);
//         if (numbers) {
//           return numbers.join('');
//         } else {
//           return '';
//         }
//       }

//       const numbersOnly = extractNumbersFromString(infowindow.a.innerText);
//       console.log('버정 번호', numbersOnly);
//       socket.emit('buttonClicked', { data: numbersOnly });

//       setInterval(() => {
//         socket.emit('buttonClicked', { data: numbersOnly });
//       }, 5000);

//       socket.on('response', (response: any) => {
//         console.log('새로운 응답 도착:', response);
//         if (response && response[1]) {
//           for (let i = 0; i < response[1].length; i++) {
//             console.log('response[1][i].GPS_LATI', response[1][i].GPS_LATI);
//             console.log('response[1][i].GPS_LONG', response[1][i].GPS_LONG);
//             BusMarker(response[1][i].GPS_LATI, response[1][i].GPS_LONG, map);
//           }
//           console.log('서버 응답:', response[1][0].GPS_LATI);
//         }
//       });

//       infowindow.open(map, marker);
//     });
//   }, []);

//   return null;
// };

// export default BusLocationMarker;
