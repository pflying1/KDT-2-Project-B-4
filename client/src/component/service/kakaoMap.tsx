import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import uuid from 'react-uuid';
// import busStopMarker from './busStopMarker';
import busMarker from './busLocationMarker';
import BusModal from '../view/busStopModal';
import ReactDOM from 'react-dom';
import axios from 'axios';
import markNull from '../view/image/bookmarknull.png'
import markPull from '../view/image/bookmarkPull.png'
import '../view/css/busStopModalStyles.css';
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
let cnt = 5; //버스 개수
let busStopName = '을지대학병원'; //정류장 이름
let busStopNumber = '12356' //정류장 번호
let busWay = '대전시청방면' //버스 방면
let busNumber: string[] = [];
let busDiv = '지선'
let busTime = '6'
let busStopCount = '4'
let toggle = false;
let mark = '';


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
            level: 5,
          };
          const map = new window.kakao.maps.Map(mapContainer.current, options);

          setMapData(map);
          fetch('http://localhost:3000/busstation')
            .then((response) => response.json())
            .then((data) => {
              
              let position:any;
              let marker:any;
              let gpsLati 
              let gpsLong 
              let gpsBusName
              let gpsBusNodeId :any
              let aaaMarker;

              data.forEach((item: BusStopData) => {
                gpsLati = item.GPS_LATI[0];
                gpsLong = item.GPS_LONG[0];
                gpsBusName = item.BUSSTOP_NM[0];
                gpsBusNodeId = item.BUS_NODE_ID[0];

                // 마커를 표시할 위치입니다
                position = new window.kakao.maps.LatLng(gpsLati, gpsLong);

                // 마커를 생성합니다
                marker = new window.kakao.maps.Marker({
                  position: position,
                  clickable: true,
                });
                // 마커를 지도에 표시합니다.
                marker.setMap(map);
                

              });
              
              window.kakao.maps.event.addListener(map, "click", function (mouseEvent:any) {
                let latlng = mouseEvent.latLng;

                position = new window.kakao.maps.LatLng(latlng.getLat(), latlng.getLng());
                // 지도에 마커를 표시합니다 
                var marker = new window.kakao.maps.Marker({
                    map: map, 
                    position: position
                });

                function BusChild(number: string, div: string, time: string, count: string) {
                  let colorVal;
                  let timeVal;
                
                  if (div === '지선') {
                    colorVal = 'green';
                  } else if (div === '간선') {
                    colorVal = 'blue';
                  } else {
                    colorVal = 'red';
                  }
                
                  if (time === '잠시후 도착') {
                    timeVal = 'red';
                  } else if (parseInt(time) <= 5) {
                    timeVal = 'orange';
                  } else {
                    timeVal = 'black';
                  }
                
                  return `
                    <div class="busInfo">
                      <div class='busDiv' style='background-color: ${colorVal}'>${div}</div>
                      <div class='busNumber'>${number}</div>
                      <div style='color:${timeVal};font-size: 7pt'>${time}분 (${count}정거장 전)</div>
                    </div>`
                };
                
                function BusList(cnt: number, number: string[], div: string, time: string, count: string) {
                  let dd = ``;
                  console.log("버스 번호배열: ", number)
                
                  for (let i = 0; i < cnt; i++) {
                    dd += BusChild(number[i], div, time, count);
                  }
                  return dd;
                }
                
                const handleImageClick = async () => {
                  const userID = localStorage.getItem('userID');
                
                  if (toggle) {
                    toggle = false
                  }
                  else {
                    toggle = true
                  }
                
                  try {
                    const response = await axios.post('/favor', {
                      busStopID: busStopNumber,
                      busStopName: busStopNumber,
                      user: userID,
                    });
                    console.log(response.data);
                  } catch (error) {
                    console.error(error);
                  }
                };
                
                

                if (toggle) {
                  mark = markPull;
                }
                else {
                  mark = markNull;
                }

                let content = `
                <div class="busModalWin">
                  <div class="titleWrap">
                    <div class="titleArea">
                      <p class="title">${busStopName}</p>
                      <img src=${mark} alt="bookMark" onClick="${handleImageClick()}" />
                      <div class="close" onclick="${closeOverlay()}" title="닫기"></div>
                    </div>
                    <div class="titleArea">
                      <p class="busText">${busStopNumber}</p>
                      <p class="busText">${busWay}</p>
                    </div>
                  </div>
                  <div class="divLine"></div>
                  <div class="busInfoWrap">
                    <p class="busTitleWrap">실시간 버스 정보</p>
                    <div class="listScroll">
                      ${ BusList(cnt, busNumber, busDiv, busTime, busStopCount)}
                    </div >
                  </div >
                </div > `;

                let  customOverlay =  new window.kakao.maps.CustomOverlay({
                  position: position,
                  content: content,
                  map: map
                  // xAnchor: 0,
                  // yAnchor: 0.3
                  
                });
                
                function closeOverlay() {
                  customOverlay.setMap(null);     
                }
                // 마커에 클릭이벤트를 등록합니다
                window.kakao.maps.event.addListener(marker, 'click', function () {

                  // 클릭한 버스 정류장 번호
                  console.log('버정 번호', gpsBusNodeId); // 출력: 8001091
                  // socket.emit('button', { data: 'test' });
                  socket.emit('buttonClicked', { data: gpsBusNodeId });

                  setInterval(() => {
                    socket.emit('buttonClicked', { data: gpsBusNodeId });
                  }, 10000);

                  if (!responseHandlerRegistered) {

                    socket.on('response', (response) => {
                      busNumber = [];
                      console.log('새로운 응답 도착:', response);
                      cnt = response.length;

                      // if (response && response[1]) {
                      if (busNumber.length === 0) {
                        for (let i = 0; i < response.length; i++) {
                          console.log('response[i][0]', response[i][0]);
                          console.log('response[1][1]', response[i][1]);
                          console.log('response[1][2]', response[i][2]);
                          console.log("길이 0 일 때")
                          busNumber.push(response[i][2])
                          busMarker(response[i][0], response[i][1], map);
                        }
                      }
                      else {
                        for (let i = 0; i < response.length; i++) {
                          console.log('response[i][0]', response[i][0]);
                          console.log('response[1][1]', response[i][1]);
                          console.log('response[1][2]', response[i][2]);
                          busMarker(response[i][0], response[i][1], map);
                        }
                      }
                    });
                    responseHandlerRegistered = true;
                  }

                  

                  customOverlay.setMap(map)

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

