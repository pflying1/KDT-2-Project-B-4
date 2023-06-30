import { Controller, Get, Post, Body } from '@nestjs/common';
import {FavorService} from './favor.service'

@Controller()
export class FavoritController {
  constructor(private readonly favorService: FavorService) {}
  @Post('favor')
  FavoritInput(@Body() requestData: any){

    console.log(requestData);
    this.favorService.CreateUser(requestData.user, requestData.favor)
    
  }
}