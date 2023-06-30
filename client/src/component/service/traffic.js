

// const _URL = 'https://openapi.its.go.kr:9443/vdsInfo?apiKey=2ba0beab795e4b4581ac8fe8804f69f0&getType=json'
// let trafficData = [];

// fetch(_URL)
// .then(response => response.json())
// .then(data => {
//   console.log('응답 데이터:', data);

//   // for(const item of data.body.items) {
//   //   let val = {
//   //     vdsId: item.vdsId,
//   //     laneNo: item.laneNo, //차선번호
//   //     date: item.colctedDate,
//   //     speed: item.speed,
//   //     volume: item.volume
//   //   };
//   //   trafficData.push(val);
//   // }
//   // console.log(trafficData)

// })
// .catch(error => {
//   console.error('에러가 발생했습니다:', error);
// });

const roadUrl = `https://data.nsdi.go.kr/api/road/links/${linkId}?key=${YOUR_API_KEY}`;
fetch(roadUrl)
  .then((response) => response.json())
  .then((data) => {
    const startPoint = {
      lat: parseFloat(data.response.body.items.item.s_lat),
      lng: parseFloat(data.response.body.items.item.s_lng),
    };
    const endPoint = {
      lat: parseFloat(data.response.body.items.item.e_lat),
      lng: parseFloat(data.response.body.items.item.e_lng),
    };
    // startPoint와 endPoint를 사용하여 지도에 정보를 표시합니다.
  })
  .catch((error) => {
    console.error('Failed to fetch linkId coordinates:', error);
  });