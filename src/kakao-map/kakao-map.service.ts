import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { LatLng } from './types';

@Injectable()
export class KakaoMapService {
  async getMapData(): Promise<LatLng> {
    const apiKey = process.env.KAKAO_MAP;
    const url = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services&autoload=false`;

    // 카카오맵 API 요청
    const response = await axios.get(url);
    const mapData = response.data;

    return mapData;
  }
}