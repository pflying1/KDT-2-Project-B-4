import { Controller, Get } from '@nestjs/common';
import { BusStopService } from './bus-stop.service';
import dotenv from 'dotenv';
dotenv.config();

@Controller('api')
export class BusStopController {
  constructor(private readonly busStopService: BusStopService) {}

  @Get('stop')
  async getConvertedData(): Promise<any> {
    const url = process.env.BUSStop_URL;
    const result = await this.busStopService.getBusStop(url);
    console.log(result);
    return result;
  }
}
