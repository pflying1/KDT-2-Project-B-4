

// const _URL = 'https://openapi.its.go.kr:9443/vdsInfo?apiKey=2ba0beab795e4b4581ac8fe8804f69f0&getType=json'
// let trafficData = [];

// fetch(_URL)
// .then(response => response.json())
// .then(data => {
//   // console.log('응답 데이터:', data.body.items);

//   for(const item of data.body.items) {
//     let val = {
//       vdsId: item.vdsId,
//       laneNo: item.laneNo, //차선번호
//       date: item.colctedDate,
//       speed: item.speed,
//       volume: item.volume
//     };
//     trafficData.push(val);
//   }
//   console.log(trafficData)

// })
// .catch(error => {
//   console.error('에러가 발생했습니다:', error);
// });

import React from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}
const TrafMap = () => {
  const mapContainer = React.useRef(null);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=ceec6de44d3f7b655b54bf75e1d12581&libraries=services';
    script.async = true;
    document.head.appendChild(script);
  
    script.onload = () => {

      const centerLatLng = new window.kakao.maps.LatLng(37.566826, 126.9786567);
      const options = {
        center: centerLatLng,
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer, options);
  
    }

  }, []);

  return (
    <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
  )
};

export default TrafMap;