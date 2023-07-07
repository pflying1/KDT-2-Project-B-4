import axios from 'axios';
import { parseString } from 'xml2js';
import * as fs from 'fs';
const firstlist = [
  ['routeid', 'DJB30300054'],
  ['routeid', 'DJB30300081'],
  ['routeid', 'DJB30300101'],
  ['routeid', 'DJB30300072'],
  ['routeid', 'DJB30300131'],
  ['routeid', 'DJB30300104'],
  ['routeid', 'DJB30300048']
]
// const fetchData = async () => {
//   try {
//     let allData = [];
//     firstlist.forEach(element => {
//       console.log(element[1])
//       const response = axios.get(`https://apis.data.go.kr/1613000/BusLcInfoInqireService/getRouteAcctoBusLcList?serviceKey=i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D&pageNo=1&numOfRows=10&_type=xml&cityCode=25&routeId=${element[1]}`);
//       const xmlData = response;
//       parseString(xmlData, (error, result) => {
//         if (error) {
//           console.error('Error parsing XML:', error);
//           return;
//         }
//         console.log(result.ServiceResult.msgBody[0].itemList[0].BUSSTOP_NM);
//         allData = [...allData, ...result.ServiceResult.msgBody[0].itemList[0].BUSSTOP_NM];
//       });
//     })
//     // 모든 데이터를 하나의 JSON 파일에 저장
//     const jsonData = JSON.stringify(allData, null, 2);
//     fs.writeFile('data.json', jsonData, 'utf8', (error) => {
//       if (error) {
//         console.error('Error writing JSON file:', error);
//       } else {
//         console.log('JSON file saved successfully with all data.');
//       }
//     });
//   } catch (error) {
//     console.error('Error fetching data from API:', error);
//   }
// };
// fetchData();
const fetchData = async () => {
  try {
    const allData = [];
    const nodenm = [];
    firstlist.forEach(async (element) => {
      console.log(element[1]);
      try {
        const response = await axios.get(`https://apis.data.go.kr/1613000/BusLcInfoInqireService/getRouteAcctoBusLcList?serviceKey=i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D&pageNo=1&numOfRows=10&_type=xml&cityCode=25&routeId=${element[1]}`);
        const xmlData = response.data;
        parseString(xmlData, (error, result) => {
          if (error) {
            console.error('Error parsing XML:', error);
            return;
          }
          const itemList = result.response.body[0].items[0].item;
          console.log('itemLIst'+itemList)
          itemList.forEach((item) => {
            
            nodenm.push(item.gpslati,item.gpslong,item.routenm,item.routetp)
            console.log('nodeenm',nodenm);
            const jsonData = JSON.stringify(nodenm, null, 2);
            fs.writeFile('busArray.json', jsonData, 'utf8', (error) => {
              if (error) {
                console.error('Error writing JSON file:', error);
              } else {
                console.log('JSON file saved successfully with all data.');
              }
            });
          });
        });
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    });
    // 모든 데이터를 하나의 JSON 파일에 저장
 
  } catch (error) {
    console.error('Error:', error);
  }
};
fetchData();