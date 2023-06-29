import axios from 'axios';
import { parseString } from 'xml2js';
import { useEffect, useState } from 'react';

const apiKey = 'i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D';
const apiUrl = 'http://openapitraffic.daejeon.go.kr/api/rest/busRouteInfo/getStaionByRouteAll?serviceKey=i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D&reqPage=1';

const GpsData = () => {
  const [gpsData, setGpsData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
          },
        });
        const xmlData = response.data;

        parseString(xmlData, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }

          const jsonData = result;
          const newData = [];

          for (
            let i = 0;
            i < jsonData.ServiceResult.msgBody[0].itemList.length;
            i++
          ) {
            newData.push([
              jsonData.ServiceResult.msgBody[0].itemList[i].GPS_LATI,
              jsonData.ServiceResult.msgBody[0].itemList[i].GPS_LONG,
            ]);
          }

          setGpsData(newData);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return gpsData;
};

export default GpsData;
