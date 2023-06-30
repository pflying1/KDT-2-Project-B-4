import { Controller, Get, Post, Body } from '@nestjs/common';


@Controller()
export class FavoritController {

  @Post('favor')
  FavoritInput(@Body() requestData: any){
    
    console.log(requestData);
  }
}