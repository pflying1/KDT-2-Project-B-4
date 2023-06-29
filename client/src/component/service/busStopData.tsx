import { useEffect, useState } from 'react';

const apiKey = 'i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D';
const apiUrl = 'http://openapitraffic.daejeon.go.kr/api/rest/busRouteInfo/getStaionByRouteAll?serviceKey=i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D&reqPage=1';

const GpsData = () => {
  const [gpsData, setGpsData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://openapitraffic.daejeon.go.kr/api/rest/busRouteInfo/getStaionByRouteAll?serviceKey=i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D&reqPage=1', {
          mode: 'no-cors',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
          },
        });
        const xmlData = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'application/xml');

        const itemList = xmlDoc.getElementsByTagName('itemList');
        const newData = [];

        for (let i = 0; i < itemList.length; i++) {
          const latitude = itemList[i].getElementsByTagName('GPS_LATI')[0].textContent;
          const longitude = itemList[i].getElementsByTagName('GPS_LONG')[0].textContent;
          newData.push([latitude, longitude]);
        }

        setGpsData(newData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return gpsData;
};

export default GpsData;
