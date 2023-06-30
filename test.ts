

import axios from 'axios';
import mongoose from 'mongoose';
import fs from 'fs';
import { parseString } from 'xml2js';
// MongoDB 연결 설정
mongoose.connect('mongodb://localhost/mydatabase', {

});

// MongoDB 스키마 정의
const dataSchema = new mongoose.Schema({
  BUSSTOP_ENG_NM: String,
  BUSSTOP_NM: String,
  BUSSTOP_SEQ: Number,
  BUSSTOP_TP: Number,
  BUS_NODE_ID: String,
  BUS_STOP_ID: String,
  GPS_LATI: String,
  GPS_LONG: String,
  ROAD_NM: String,
  ROAD_NM_ADDR: String,
  ROUTE_CD: String,
  TOTAL_DIST: Number,
});

// MongoDB 모델 생성
const DataModel = mongoose.model('Data', dataSchema);
for(let i = 0; i < 1; i++) {
// 외부 API에서 데이터 가져오기
axios.get(`http://openapitraffic.daejeon.go.kr/api/rest/busRouteInfo/getStaionByRouteAll?serviceKey=i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D&reqPage=${i}`)
  .then(response => {
    const xmlData = response.data; // XML 데이터

    parseString(xmlData, (error, result) => {
      if (error) {
        console.error('Error parsing XML:', error);
        return;
      }

      const jsonData = JSON.stringify(result, null, 2); // JSON 문자열로 변환

      fs.writeFile('data.json', jsonData, 'utf8', (error) => {
        if (error) {
          console.error('Error writing JSON file:', error);
        } else {
          console.log('JSON file saved successfully.');
        }
      });

      console.log(jsonData); // JSON 데이터 출력
    });
        // console.log(JSON.parse(jsonData));
    // MongoDB에 데이터 저장
    // DataModel.create(jsonData, (error, data) => {
    //   if (error) {
    //     console.error('Error saving data to MongoDB:', error);
    //   } else {
    //     console.log('Data saved to MongoDB:', data);
    //   }
    //   mongoose.disconnect(); // 연결 종료
    // });
  })
  .catch(error => {
    console.error('Error fetching data from API:', error);
  }
  );}
