// // import React, { useEffect } from 'react';

// // const Map = () => {
// //   useEffect(() => {
// //     const script = document.createElement('script');
// //     script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=ceec6de44d3f7b655b54bf75e1d12581';
// //     script.async = true;
// //     document.head.appendChild(script);

// //     script.onload = () => {
// //       const container = document.getElementById('map');
// //       const options = {
// //         center: new window.kakao.maps.LatLng(33.450701, 126.570667),
// //         level: 3
// //       };

// //       const map = new window.kakao.maps.Map(container, options);
// //     };
// //   }, []);

// //   return <div id="map" style={{ width: 800, height: 800 }}></div>;
// // };

// // export default Map;


import React from 'react';

// type GeocoderResult = {
//   y: number;
//   x: number;
// };

// type GeocoderStatus = 'OK' | 'ERROR';
const Map = () => {
  const mapContainer = React.useRef(null);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=ceec6de44d3f7b655b54bf75e1d12581&libraries=services&autoload=false`; 
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(36.35, 127.385), // 초기 지도 중심 좌표
          level: 3, // 초기 지도 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer.current, options);
        let geocoder = new window.kakao.maps.services.Geocoder();

        let coo = [];
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch('대전 엑스포로', function(  result, status){

            // 정상적으로 검색이 완료됐으면 
            if (status === window.kakao.maps.services.Status.OK) {

                let coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                coo.push(coords.La)
                coo.push(coords.Ma)

                var marker = new window.kakao.maps.Marker({
                  map: map,
                  position: coords
                });
                marker.setMap(map)
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                //map.setCenter(coords);
            } 
        });
        console.log("dd", coo)
        
        // 지도에 표시할 선을 생성합니다
        // var polyline = new window.kakao.maps.Polyline({
        //     path: coo, // 선을 구성하는 좌표배열 입니다
        //     strokeWeight: 5, // 선의 두께 입니다
        //     strokeColor: '#FFAE00', // 선의 색깔입니다
        //     strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        //     strokeStyle: 'solid' // 선의 스타일입니다
        // });
        
        // 지도에 선을 표시합니다 
        // polyline.setMap(map); 


        // 결과값으로 받은 위치를 마커로 표시합니다
        // var marker = new window.kakao.maps.Marker({
        //   map: map,
        //   position: coo
        // });
        // marker.setMap(map)

      });
    };
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
};

export default Map;