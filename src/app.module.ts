import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { KakaoMapController } from './kakao-map/kakao-map.controller';
import { KakaoMapService } from './kakao-map/kakao-map.service';
import { KakaoMapModule } from './kakao-map/kakao-map.module';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [UserModule, KakaoMapModule,HttpModule],
  controllers: [AppController, KakaoMapController],
  providers: [AppService, KakaoMapService],
})
export class AppModule {}
