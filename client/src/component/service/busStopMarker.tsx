import { io } from 'socket.io-client';
import classNames from 'classnames';
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

/**
 * 버스 위치를 나타내는 마커 모듈입니다.
 *
 * @param lati 위도입니다.
 * @param long 경도입니다.
 * @param busNodeId
 * @param busName
 * @param map 마커를 지도에 표시합니다. map이라고 꼭넣어주세요.
 */
const socket = io('http://localhost:3000/bus');
const SocketBus = () => {
  // const [message, setMessage] = useState<string>('');
  socket.on('events', socket => {
    console.log('받은 메시지: ', socket)
  })
  socket.emit('events', 'hi')
}

const BusLocationMarker = (lati: number, long: number, busName: string, busNodeId: number, map: string | undefined) => {
  // 마커를 표시할 위치입니다 
  const position = new window.kakao.maps.LatLng(lati, long);

  // 마커를 생성합니다
  const marker = new window.kakao.maps.Marker({
    position: position,
    clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
  });

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
    infowindow.open(map, marker);
    SocketBus();
  });
}

export default BusLocationMarker

