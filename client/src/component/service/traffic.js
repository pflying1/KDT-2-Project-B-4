

const _URL = 'https://openapi.its.go.kr:9443/vdsInfo?apiKey=2ba0beab795e4b4581ac8fe8804f69f0&getType=json'
let trafficData = [];

fetch(_URL)
.then(response => response.json())
.then(data => {
  // console.log('응답 데이터:', data.body.items);

  for(const item of data.body.items) {
    let val = {
      vdsId: item.vdsId,
      laneNo: item.laneNo, //차선번호
      date: item.colctedDate,
      speed: item.speed,
      volume: item.volume
    };
    trafficData.push(val);
  }
  console.log(trafficData)

})
.catch(error => {
  console.error('에러가 발생했습니다:', error);
});
