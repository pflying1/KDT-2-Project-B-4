var axios = require('axios');
var parseString = require('xml2js').parseString;

var apiKey = 'i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D';
var apiUrl = 'http://openapitraffic.daejeon.go.kr/api/rest/busRouteInfo/getStaionByRouteAll?serviceKey=i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D&reqPage=1';

const GpsData = () => {

  axios
    .get(apiUrl, {
      headers: {
        Authorization: 'Bearer ' + apiKey,
      },
    })
    .then(function (response) {
      var xmlData = response.data;

      parseString(xmlData, function (err, result) {
        if (err) {
          console.error(err);
          return;
        }

        var jsonData = result;
        var gpsData = [];

        var itemList = jsonData.ServiceResult.msgBody[0].itemList;
        for (var i = 0; i < itemList.length; i++) {
          gpsData.push(itemList[i].GPS_LATI, itemList[i].GPS_LONG);
        }
        console.log(gpsData);
        return gpsData;
      });
    })
    .catch(function (error) {
      console.error(error);
    });
}

export default GpsData;
