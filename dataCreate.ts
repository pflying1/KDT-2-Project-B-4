import axios from 'axios';
import { parseString } from 'xml2js';
import * as fs from 'fs';

const fetchData = async () => {
  try {
    let allData = [];

    for (let i = 1; i <= 60; i++) {
      const response = await axios.get(
        `http://openapitraffic.daejeon.go.kr/api/rest/busRouteInfo/getStaionByRouteAll?serviceKey=W2ZNx9bVB6N8TT8yiKOEeL28g%2By01Tt7ywJzAE%2FrdaL6dEzjW2Cp5s52C0ZtD2JiNNtpyGLw8Z7aaThuRoJQhA%3D%3D&reqPage=${i}`
      );

      const xmlData = response.data;

      parseString(xmlData, (error, result) => {
        if (error) {
          console.error('Error parsing XML:', error);
          return;
        }

        console.log(result.ServiceResult.msgBody[0].itemList[0].BUSSTOP_NM);
        allData = [...allData, ...result.ServiceResult.msgBody[0].itemList[0].BUSSTOP_NM];
      });
    }

    // 모든 데이터를 하나의 JSON 파일에 저장
    const jsonData = JSON.stringify(allData, null, 2);
    fs.writeFile('data.json', jsonData, 'utf8', (error) => {
      if (error) {
        console.error('Error writing JSON file:', error);
      } else {
        console.log('JSON file saved successfully with all data.');
      }
    });
  } catch (error) {
    console.error('Error fetching data from API:', error);
  }
};

fetchData();
