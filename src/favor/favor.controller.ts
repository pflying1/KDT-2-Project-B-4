//favor.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import {FavorService} from './favor.service';

@Controller()
export class FavoritController {
  constructor(private readonly favorService: FavorService) {}
  @Post('favor')
  FavoritInput(@Body() requestData: any){
    
    console.log("서버 첫번째: ", requestData);
    const data = this.favorService.CreateUser(requestData.busStopID, requestData.busStopName, requestData.user)
    console.log('넘어온 데이터: ', data);
    return data;
  }
}