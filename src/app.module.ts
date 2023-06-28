import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { KakaoMapController } from './kakao-map/kakao-map.controller';
import { KakaoMapService } from './kakao-map/kakao-map.service';
import { KakaoMapModule } from './kakao-map/kakao-map.module';
import { HttpModule } from '@nestjs/axios';
import { BusLocationService } from './bus-location/bus-location.service';
import { BusLocationController } from './bus-location/bus-location.controller';
import { BusLocationModule } from './bus-location/bus-location.module';
@Module({
  imports: [UserModule, KakaoMapModule, HttpModule, BusLocationModule],
  controllers: [AppController, KakaoMapController, BusLocationController],
  providers: [AppService, KakaoMapService, BusLocationService],
})
export class AppModule {}
