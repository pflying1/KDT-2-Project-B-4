import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { parseStringPromise } from 'xml2js';

// interface ServiceResult {
//   msgHeader?: string;
//   msgBody?: {
//     itemList?: string;
//   };
// }
interface response {
  header?: string;
  body?: {
    items?: {
      item?: string;
    }
    numOfRows?: number;
    pageNo?: number;
    totalCount?: number;
  }
}

let firstlist = [];
let secondlist = [];
@Injectable()
export class SocketBusServerService {
  constructor(
    private httpService: HttpService
  ) {
  }
  async getDataFromExternalApi(payload: any): Promise<any> {
    // 외부 API에 첫 번째 요청을 보내고 데이터를 가져옵니다.
    firstlist = [];
    secondlist = [];
    // console.log('이건 서비스쪽 ', payload.data);
    // const firstApiUrl = `https://apis.data.go.kr/1613000/BusRouteInfoInqireService/getRouteAcctoThrghSttnList?serviceKey=joKaZp3MojMlG5ctM0OwBqz7tYkkTyJM4FX3Rg3LRKO%2BWTWWEUsE0Q3TH0HAtz%2FRKQMHyLvtcCR9QCLT8ZOUEQ%3D%3D&pageNo=1&numOfRows=10&_type=xml&cityCode=25&routeId=DJB${payload.data}`;
    // const firstApiResponse = await this.httpService.get(firstApiUrl).toPromise();
    // const data = firstApiResponse.data;
    // const json = await parseStringPromise(data, { explicitArray: false, trim: true }) as { response: response };
    // for (let i = 0; i < json.response.body.items.item.length; i++) {
    //   firstlist.push(Object.entries(json.response.body.items.item[i])[6])
    // }
    // console.log(firstlist)
    // // 첫 번째 API의 결과를 가공하여 두 번째 API 호출에 필요한 데이터를 추출합니다.
    // console.log('firstlist', firstlist);

    // 예시: itemList의 첫 번째 아이템의 itemId를 추출

    // 두 번째 API 호출을 수행합니다. 
    // for (let i = 0; i < firstlist.length; i++) {
    //   const secondApiUrl = `http://openapitraffic.daejeon.go.kr/api/rest/busposinfo/getBusPosByRtid?serviceKey=W2ZNx9bVB6N8TT8yiKOEeL28g%2By01Tt7ywJzAE%2FrdaL6dEzjW2Cp5s52C0ZtD2JiNNtpyGLw8Z7aaThuRoJQhA%3D%3D&busRouteId=${firstlist[0][i]}`;
    //   const secondApiResponse = await this.httpService.get(secondApiUrl).toPromise();
    //   const secondApiData = secondApiResponse.data;
    //   const json = await parseStringPromise(secondApiData, { explicitArray: false, trim: true }) as { ServiceResult: ServiceResult };
    //   secondlist.push(json.ServiceResult.msgBody.itemList);
    // }
    // console.log(secondlist)

    console.log('이건 서비스쪽 ', payload.data);
    const firstApiUrl = `https://apis.data.go.kr/1613000/BusSttnInfoInqireService/getSttnThrghRouteList?serviceKey=joKaZp3MojMlG5ctM0OwBqz7tYkkTyJM4FX3Rg3LRKO%2BWTWWEUsE0Q3TH0HAtz%2FRKQMHyLvtcCR9QCLT8ZOUEQ%3D%3D&pageNo=1&numOfRows=10&_type=xml&cityCode=25&nodeid=DJB${payload.data}`;
    const firstApiResponse = await this.httpService.get(firstApiUrl).toPromise();
    const data = firstApiResponse.data;
    const json = await parseStringPromise(data, { explicitArray: false, trim: true }) as { response: response };
    for (let i = 0; i < json.response.body.items.item.length; i++) {
      firstlist.push(Object.entries(json.response.body.items.item[i])[1])
    }

    // 첫 번째 API의 결과를 가공하여 두 번째 API 호출에 필요한 데이터를 추출합니다.
    console.log('firstlist', firstlist);
    console.log('firstlist[0]', firstlist[0]);
    console.log('firstlist[0][2]', firstlist[0][2]);
    console.log('firstlist[1][1]', firstlist[1][1]);
    console.log('firstlist[2][1]', firstlist[2][1]);
    console.log('firstlist[1][1]', firstlist[1][0]);

    console.log('firstlist.length', firstlist.length);


    for (let i = 0; i < firstlist.length; i++) {
      const thirdApiUrl = `https://apis.data.go.kr/1613000/BusLcInfoInqireService/getRouteAcctoBusLcList?serviceKey=joKaZp3MojMlG5ctM0OwBqz7tYkkTyJM4FX3Rg3LRKO%2BWTWWEUsE0Q3TH0HAtz%2FRKQMHyLvtcCR9QCLT8ZOUEQ%3D%3D&pageNo=1&numOfRows=10&_type=xml&cityCode=25&routeId=${firstlist[i][1]}`;
      const secondApiResponse = await this.httpService.get(thirdApiUrl).toPromise();
      const secondApiData = secondApiResponse.data;
      const json = await parseStringPromise(secondApiData, { explicitArray: false, trim: true }) as { response: response };
      secondlist.push(json.response.body.items.item);
    }
    // 필요한 가공 작업을 수행합니다.
    // const processedData = // 가공 작업 수행

    // 최종적으로 가공된 데이터를 반환합니다.
    console.log('secondlist', secondlist);
    return secondlist;

  }


  // async getDataFromExternalApi(payload: any):Promise<{ ServiceResult: ServiceResult }> {
  //   // 외부 API에 요청을 보내고 데이터를 가져오는 로직을 구현합니다.

  //   const headers = {
  //     'Authorization': 'Bearer your-access-token', // 액세스 토큰 대체
  //     'Content-Type': 'application/xml',
  //     // 필요한 경우 여기에서 추가 헤더 추가
  //   };

  //   const response = await this.httpService.get(`http://openapitraffic.daejeon.go.kr/api/rest/arrive/getArrInfoByStopID?serviceKey=i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D&BusStopID=${payload.data}`, { headers }).toPromise();
  //   const data = response.data;
  //   const json = await parseStringPromise(data, { explicitArray: false, trim: true }) as { ServiceResult: ServiceResult };
  //   console.log('이거는 소켓 서비스', Object.entries(json.ServiceResult.msgBody.itemList[0])[10]);
  //   return json;
  // }


}
