import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { parseStringPromise } from 'xml2js';


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
    
    console.log('이건 서비스쪽 ', payload.data);
    const firstApiUrl = `https://apis.data.go.kr/1613000/BusSttnInfoInqireService/getSttnThrghRouteList?serviceKey=i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D&pageNo=1&numOfRows=10&_type=xml&cityCode=25&nodeid=DJB${payload.data}`;
    const firstApiResponse = await this.httpService.get(firstApiUrl).toPromise();
    const data = firstApiResponse.data;
    const json = await parseStringPromise(data, { explicitArray: false, trim: true }) as { response: response };
    for (let i = 0; i < json.response.body.items.item.length; i++) {
      firstlist.push(Object.entries(json.response.body.items.item[i])[1])
    }

    // 첫 번째 API의 결과를 가공하여 두 번째 API 호출에 필요한 데이터를 추출합니다.
    console.log('firstlist', firstlist);
  
    for (let i = 0; i < firstlist.length; i++) {
      const thirdApiUrl = `https://apis.data.go.kr/1613000/BusLcInfoInqireService/getRouteAcctoBusLcList?serviceKey=i7Cd%2BE5PV6rYTmSC4CrnvP8fJVN0f6uDLp%2BO6ZIPUMEHE5eOBUlBUbibOnABF3JFT6LgLkerWvmMzp3%2F8rFwYA%3D%3D&pageNo=1&numOfRows=10&_type=xml&cityCode=25&routeId=${firstlist[i][1]}`;
      const secondApiResponse = await this.httpService.get(thirdApiUrl).toPromise();
      const secondApiData = secondApiResponse.data;
      const json = await parseStringPromise(secondApiData, { explicitArray: false, trim: true }) as { response: response };
      secondlist.push([Object.values(json.response.body.items.item[i])[0],Object.values(json.response.body.items.item[i])[1],Object.values(json.response.body.items.item[i])[5],Object.values(json.response.body.items.item[i])[6]]);
    }
    // 필요한 가공 작업을 수행합니다.


    // 최종적으로 가공된 데이터를 반환합니다.
    console.log('secondlist', secondlist);
    return secondlist;

  }




}
