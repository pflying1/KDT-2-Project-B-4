import io from 'socket.io-client';
import busMarker from './busLocationMarker';
import busDeleteMarker from './busDeleteMarker';

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
const busStopMarker = (lati: number, long: number, busName: string, busNodeId: number, map: string | undefined) => {
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
    let coordinates: any = [];
    let count = 0;

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
        // if (response && response[1]) {
        for (let i = 0; i < response.length; i++) {
          console.log('response[i][0]', response[i][0]);
          console.log('response[1][1]', response[i][1]);
          busMarker(response[i][0], response[i][1], map, 0);
          coordinates.push([response[i][0], response[i][1]]);
          // if (i + 1 === response.length) {
          //   count = 1;
          //   console.log("지워지는 버스: "+response[i][2])
          //   for(let j = 0; j < i)
          //   busMarker(response[i][0], response[i][1], map, 1);
          // }
        }
        for (let j = 0; j < response.length-1; j++) {
          busMarker(response[j][0], response[j][1], map, 1);
        }
        return coordinates;
      });
      responseHandlerRegistered = true;
    }
    console.log("coord", coordinates)
    //배열 출력 완료 되면 for문 실행해서 busMarker(, , null)적용해보기

    infowindow.open(map, marker);
  });
  // function closeInfoWindow() {
  //   infowindow.close(); // 인포윈도우를 닫습니다.
  //   marker.setMap(null); // 마커를 지도에서 제거합니다.
  // }

  // // x 버튼 클릭 이벤트에 closeInfoWindow 함수를 연결합니다.
  // const closeButton = infowindow.getContent().querySelector('.close') as HTMLElement;
  // closeButton.addEventListener('click', closeInfoWindow)
}

export default busStopMarker

