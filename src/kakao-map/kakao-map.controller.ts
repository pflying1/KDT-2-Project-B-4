import { Controller, Get, Res } from '@nestjs/common';
import { KakaoMapService } from './kakao-map.service';
import { Response } from 'express';

@Controller('map')
export class KakaoMapController {
  constructor(private readonly kakaoMapService: KakaoMapService) {}

  @Get()
  async getMap(@Res() res: Response) {
    const center = '127.0286639,37.4988391';
    const width = 640;
    const height = 480;
    const mapData = await this.kakaoMapService.getStaticMap(center, width, height);

    res.setHeader('Content-Type', 'image/png');
    res.send(mapData);
  }
}