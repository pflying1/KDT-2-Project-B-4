import { Controller, Post, Get, Body } from '@nestjs/common';
import { BusSocketService } from './bus-socket.service';

@Controller("api")
export class BusSocketController {
  constructor(private busSocketService: BusSocketService) {}

  @Post('bus')
  async saveData(@Body('data') data: any) {
    this.busSocketService.saveData(data);

    console.log("Data received:", data); // 이제 데이터를 성공적으로 받아옵니다.
  }

  @Get('bus')
  async getData() {
    const data = this.busSocketService.getData();

    console.log("Data fetched:", data);
    return data;
  }
}