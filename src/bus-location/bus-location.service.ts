/* eslint-disable prettier/prettier */
// bus-location.service.ts
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
export class BusLocationService {
  constructor(private httpService: HttpService) {}

  async getBusLocation(url: string): Promise<{ ServiceResult: ServiceResult }> {
    const headers = {
      'Authorization': 'Bearer your-access-token', // 액세스 토큰 대체
      'Content-Type': 'application/xml',
      // 필요한 경우 여기에서 추가 헤더 추가
    };
    const response = await this.httpService.get(url, { headers }).toPromise();
    const data = response.data;
    const json = await parseStringPromise(data, { explicitArray: false, trim: true }) as { ServiceResult: ServiceResult };
    console.log(json);
    return json;
  }
}
