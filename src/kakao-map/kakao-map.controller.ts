import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
 import 'dotenv/config';
 import { KakaoMapService } from "./kakao-map.service";

@Controller('/main')
export class KakaoMapController {
  constructor(private readonly kakaoMapService: KakaoMapService) {}

  @Get()
  async getMap(@Res() res: Response) {
    const mapData = await this.kakaoMapService.getMapData();

    res.send(mapData);
  }
}