import axios from 'axios'; //axios는 fetch와 비슷하지만 별도의 설치 필요, HTTP요쳥을 보냄
import { parseString } from 'xml2js'; //XML을 js객체로 변환하는 라이브러리

const apiKey = 'i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D';
const apiUrl = 'http://openapitraffic.daejeon.go.kr/api/rest/busRouteInfo/getStaionByRouteAll?serviceKey=i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D&reqPage=1';

  const GpsData = () => {

    axios.get(apiUrl, { //axios.get 메서드를 사용하여 'apiURL'에 GET요쳥을 보냄
      headers: {
        'Authorization': `Bearer ${apiKey}` // API 키를 인증 헤더에 포함
      }
    })
      .then(response => {
        const xmlData = response.data; // XML 데이터 가져오기
    
        parseString(xmlData, (err, result) => { // parseString을 사용하여 xmlData파싱, 파싱결과는 콜백함수의 'result' 매개변수로 전달, 에러가 발생하면 에러를 출력하고 함수 종료
          if (err) {
            console.error(err);
            return;
          }
    
          const jsonData = result; // XML을 JavaScript 객체로 변환한 데이터
          // 데이터 처리
    
          const gpsData = []
    
          for (let i = 0; i < jsonData.ServiceResult.msgBody[0].itemList.length; i++) {
            gpsData.push(jsonData.ServiceResult.msgBody[0].itemList[i].GPS_LATI, jsonData.ServiceResult.msgBody[0].itemList[i].GPS_LONG)
          }
          return gpsData;
          console.log(gpsData)
          // console.log(jsonData.ServiceResult.msgBody[0].itemList[0].GPS_LONG)
    
        });
      })
      .catch(error => {
        // 에러 처리
        console.error(error);
      });
  }

  const Data = GpsData();


export default Data;