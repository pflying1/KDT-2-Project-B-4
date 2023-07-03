import React, { useEffect, useState } from 'react';
import { io, Socket } from "socket.io-client";
/**
 * 버스 위치를 나타내는 마커 모듈입니다.
 *
 * @param lati 위도입니다.
 * @param long 경도입니다.
 * @param map 마커를 지도에 표시합니다. map이라고 꼭넣어주세요.
 */
interface IUrl {
  url: string;
}

interface BusStopData {
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
        BUSSTOP_ENG_NM: string;
        BUSSTOP_NM: string;
        BUSSTOP_SEQ: string;
        BUSSTOP_TP: string;
        BUS_NODE_ID: string;
        BUS_STOP_ID: string;
        GPS_LATI: number;
        GPS_LONG: number;
        ROAD_NM: string;
        ROAD_NM_ADDR: string;
        ROUTE_CD: string;
        TOTAL_DIST: string;
      }];
    };
  };
}

const busLocationMarker = (lati: number, long: number, map: string, nodeid: string | undefined) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [urlData, setUrlData] = useState<IUrl | null>(null);
  const [url] = useState<string>("");

  useEffect(() => {
    const socketInstance = io("http://localhost:3000/api/buslocation/socket");
    setSocket(socketInstance);

        // 이벤트 핸들러 설정
        socketInstance.on("busevents", (data: IUrl) => {
          setUrlData(data);
          console.log("busevents on: ", data);
        });
    
        socketInstance.on("error", (error: { message: string }) => {
          console.error("Error receiving data:", error.message);
        });
    
        // 클린업 함수를 통해 소켓 인스턴스 제거
        return () => {
          socketInstance.disconnect();
        };
      }, [url]);
      console.log(JSON.stringify(urlData, null, 2))
    
      const startRequest = () => {
        if (socket) {
          socket.emit("start");
        }
      };
    
      const stopRequest = () => {
        if (socket) {
          socket.emit("stop");
        }
      };
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
  const iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
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

  });
  return (
    <div>
      <button onClick={startRequest}>1번 버튼 (API 요청 시작)</button>
      <button onClick={stopRequest}>2번 버튼 (API 요청 중지)</button>
      <div>
        {urlData && <pre>{JSON.stringify(urlData, null, 2)}</pre>}
      </div>
    </div>
  );
}

export default busLocationMarker

