/* eslint-disable prettier/prettier */
// bus-Stop.service.ts
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { parseStringPromise } from 'xml2js';

interface ServiceResult {
  msgHeader?: string;
  msgBody?: {
    itemList?: string;
  };
}

@Injectable()
export class BusStopService {
  constructor(private httpService: HttpService) { }


  async getBusStop(url: string): Promise<{ ServiceResult: ServiceResult }> {
    // for (let i = 0; i < 2; i++) {
      const headers = {
        'Authorization': 'Bearer your-access-token', // 액세스 토큰 대체
        'Content-Type': 'application/xml',
        // 필요한 경우 여기에서 추가 헤더 추가
      };
      const response = await this.httpService.get(url, { headers }).toPromise();
      const data = response.data;
      const json = await parseStringPromise(data, { explicitArray: false, trim: true }) as { ServiceResult: ServiceResult };
      console.log(Object.entries(json.ServiceResult.msgBody.itemList[0])[1]);
      console.log(Object.entries(json.ServiceResult.msgBody.itemList[0])[4]);
      console.log(Object.entries(json.ServiceResult.msgBody.itemList[0])[5]);
      console.log(Object.entries(json.ServiceResult.msgBody.itemList[0])[6]);
      console.log(Object.entries(json.ServiceResult.msgBody.itemList[0])[9]);


      return json;
    // }
  }

}
