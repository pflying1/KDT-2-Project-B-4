fetch('https://openapi.its.go.kr:9443/cctvInfo?apiKey=584a17201cd54d8b925b869a09fc9880&type=ex&cctvType=1&minX=127.100000&maxX=128.890000&minY=34.100000&maxY=39.100000&getType=json')
  .then(response => response.json())
  .then(data => {
    // API 응답 데이터 처리
    // const test = Object.entries(data.response.data)
    console.log( );
   
  })
  .catch(error => {
    // 오류 처리
    console.error('API 요청 중 오류 발생:', error);
  });
//  fetch('https://dapi.kakao.com/v2/maps/sdk.js?appkey=a458bf2535c07cfc831195c2d0e1f48a')
//   .then(response => response.text())  // JSON 대신 text로 변경
//   .then(data => {
//     // API 응답 데이터 처리
//     console.log(data);
//   })
//   .catch(error => {
//     // 오류 처리
//     console.error('API 요청 중 오류 발생:', error);
//   });
