// kakao-map.module.ts
import { Module } from '@nestjs/common';
import { KakaoMapController } from './kakao-map.controller';
import { KakaoMapService } from './kakao-map.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [KakaoMapController],
  providers: [KakaoMapService],
})
export class KakaoMapModule {}
