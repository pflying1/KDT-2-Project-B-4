/**
 * 버스 위치를 나타내는 마커 모듈입니다.
 *
 * @param lati 위도입니다.
 * @param long 경도입니다.
 * @param map 마커를 지도에 표시합니다. map이라고 꼭넣어주세요.
 */

import { markAsUntransferable } from "worker_threads";

const busMarker = (lati: number, long: number, map: string | undefined) => {
  const imageSrc = "https://i.fbcd.co/products/resized/resized-750-500/ad410d08d206d25de623d0a536603684e27e32288e34bf03f6f4c4654668b6bb.jpg", // 마커이미지의 주소입니다    
    imageSize = new window.kakao.maps.Size(35, 30), // 마커이미지의 크기입니다
    imageOption = { offset: new window.kakao.maps.Point(10, 20) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new window.kakao.maps.LatLng(lati, long); // 마커가 표시될 위치입니다

  // 마커를 생성합니다
  const marker = new window.kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // 마커이미지 설정 
  });
  
      marker.setMap(map);
      setInterval(() => {
        marker.setMap(null)
      }, 9000);
  //   // 마커가 지도 위에 표시되도록 설정합니다
 

}

export default busMarker

