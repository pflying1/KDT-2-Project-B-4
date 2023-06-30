import React, { useEffect, useState } from 'react';
/**
 * 버스 위치를 나타내는 마커 모듈입니다.
 *
 * @param lati 위도입니다.
 * @param long 경도입니다.
 * @param map 마커를 지도에 표시합니다. map이라고 꼭넣어주세요.
 */

const busLocationMarker = (lati:number,long:number,map:string|undefined) => {
  
  const imageSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///82Z/MzMzMbWvLq7f0iXfIsYvOGnfcpYPO1wvqhs/jI0fvZ4Pw2avszPF0zMi5GRkYODg4rKyt0dHStvPmcr/hyj/a6xvrR2vw/bvSVq/jz9v6wwPptjfbs8P6Tp/dmhvVegPVLc/RSePQAS/IYJUxtc4sODAArKiV+fn6Aq3V1AAACXklEQVR4nO3d61LiQBBAYYckQwzsRV2FEEDF+/u/4Arq1mhWUsN0d7Lu+f5S1eQUJDUpYDg6AgAAAAAAAAAAAAAAAAAE8vlEyzzvO+45b1GXhZ6yXvQb2Yyz0ukqs3HTX+C81u7bNdbzvgIn3hsEOufLST+B08Kkb6uY9lJYmwU6V/cRuLA4B9+UC/vAxrBvy/6CurQ7C7eKpXnhyuY6+savrAObjWmgcxvrt+m64yWMX8p1XLj82rgwz/YHXkavsi/3J2bW69OOwmIWPXG2/9JFoTgKKWyjkEJpHYW+msaq9q8hhlbofBarY5E0uEJxFFJIIYUUUkghhcqFXuGDwxd+GIX+anasY3blh1E4VnuWMYWKKJRBoSYKZVCoiUIZFGqiUAaFmiiUQaEmCmVQqIlCGRRqolAGhZoolEGhJgplUKiJQhkUaqJQBoWaKJRBoSYKZVCoiUIZFGqiUAaFmsLveV9XWq7dMApdqcUNpdAChRRSSCGFFFJIIYWJhT5cSqZu4/bZsH5/Ybn89ccycac6vwqHDfIXllXahpFlFQ4byP3h+8LzxMLzcBiFmiikkMIXFGqikMJ/uPArrtrc5iJwkxTo3E04LNiOud/7Qx9IDPx0GHfAFFJIIYUUUkghhRT+n4W3u024v7XF7+T9blfvv0zcPXBr/g9z+db67nvLfZMfrrlvD7xb7x6yDnz18OOjx7OkgWePrYkPQsd6mJPRR6eJhaetiSdCx3oYCqNRaI7CaBSaozAaheYojEahua9fOPrZ8pQ08Kk9cCR0rAAAAAAAAAAAAAAAAECn38vfZsQ/Eb0SAAAAAElFTkSuQmCC', // 마커이미지의 주소입니다    
  imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
  imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    
  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
      markerPosition = new window.kakao.maps.LatLng(lati,long); // 마커가 표시될 위치입니다

  // 마커를 생성합니다
  const marker = new window.kakao.maps.Marker({
      position: markerPosition, 
      image: markerImage // 마커이미지 설정 
  });
  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);  
}

export default busLocationMarker 

