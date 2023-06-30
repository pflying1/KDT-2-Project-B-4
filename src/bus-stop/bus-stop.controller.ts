import { Controller, Get } from '@nestjs/common';
import { BusStopService } from './bus-stop.service';
import {connectToDatabase} from '../../database.config';
import { BusStop } from './bus-stop.schema';

import dotenv from 'dotenv';
dotenv.config();
let count: number = 1;

@Controller('api')
export class BusStopController {
  constructor(private readonly busStopService: BusStopService) { }

  @Get('stop')
  async getConvertedData(): Promise<any> {
    let BUSStop_URL = `http://openapitraffic.daejeon.go.kr/api/rest/busRouteInfo/getStaionByRouteAll?serviceKey=` + process.env.BUSstop_KEY + `&reqPage=${count}`
    const url = BUSStop_URL;
    const result = await this.busStopService.getBusStop(url);
    console.log(result);
    count++;

    const busStop = await new BusStop(Object.entries(result.ServiceResult.msgBody.itemList[0])[1][0],Object.entries(result.ServiceResult.msgBody.itemList[0])[1][1]);
    await busStop.save();


    return result;
  }
}
