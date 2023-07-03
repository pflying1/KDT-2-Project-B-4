import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000/busSocket'); // Socket.IO 서버에 연결합니다.
/**
 * 버스 위치를 나타내는 마커 모듈입니다.
 *
 * @param lati 위도입니다.
 * @param long 경도입니다.
 * @param busNodeId
 * @param busName
 * @param map 마커를 지도에 표시합니다. map이라고 꼭넣어주세요.
 */
 let responseHandlerRegistered = false;
const busLocationMarker = (lati: number, long: number, busName: string, busNodeId: number, map: string | undefined) => {
  console.log("버스 정류장 아이디" + busNodeId);
  // 마커를 표시할 위치입니다 
  const position = new window.kakao.maps.LatLng(lati, long);

  // 마커를 생성합니다
  const marker = new window.kakao.maps.Marker({
    position: position,
    clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
  });
 
    // 서버로부터 응답을 받습니다.
  
  // 아래 코드는 위의 마커를 생성하는 코드에서 clickable: true 와 같이
  // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
  // marker.setClickable(true);

  // 마커를 지도에 표시합니다.
  marker.setMap(map);

  // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
  const iwContent = `<div>버스정류소 : ${busNodeId}</div> 
  <div> 정류소 이름: ${busName}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

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
    console.log('버정 번호',numbersOnly); // 출력: 8001091
    socket.emit('buttonClicked', { data: numbersOnly });
  
    if (!responseHandlerRegistered) {
      socket.on('response', (response) => {
        console.log('서버 응답:', response);
        // 추가적인 작업을 수행할 수 있습니다.
      });
      responseHandlerRegistered = true;
    }

    infowindow.open(map, marker);
  });
}

export default busLocationMarker

