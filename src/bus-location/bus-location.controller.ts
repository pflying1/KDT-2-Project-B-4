import { Controller, Get } from '@nestjs/common';
import { BusLocationService } from './bus-location.service';
import dotenv from 'dotenv';
dotenv.config();

@Controller('api')
export class BusLocationController {
  constructor(private readonly busLocationService: BusLocationService) {}

  @Get('bus')
  async getConvertedData(): Promise<any> {
    const url = process.env.BUSLOCATION_URL;
    const result = await this.busLocationService.getBusLocation(url);
    console.log(result);
    return result;
  }

  
}
