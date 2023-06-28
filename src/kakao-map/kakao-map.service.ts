import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
@Injectable()
export class KakaoMapService {
  constructor(private httpService: HttpService) {}
  async getStaticMap(center: string, width: number, height: number) {
  
    const url = `https://dapi.kakao.com/v2/maps/staticmap?appkey=${process.env.KAKAO_MAP}&center=${center}&size=${width}x${height}&level=3`;
  
    const response: AxiosResponse<ArrayBuffer> = await this.httpService.get(url, {responseType: 'arraybuffer'}).toPromise();
  
    // 이미지 버퍼를 Base64 문자열로 변환
    const base64Image = Buffer.from(response.data).toString('base64');
  
    // 이렇게 반환하면 클라이언트에서 쉽게 이미지로 표시할 수 있습니다.
    return `data:image/png;base64,${base64Image}`;
  }
}
