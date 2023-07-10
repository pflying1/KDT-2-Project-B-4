import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel, raw } from '@nestjs/mongoose';
import { Bus, BusStopDocument } from './busstation.model';
import { Bus2, Bus2Document } from './bus2.model';

// interface Service {


//   BUS_NODE_ID: string[];
//   BUS_STOP_ID: string[];
//   GPS_LATI: string[];
//   GPS_LONG: string[];
//   ROUTE_CD: string[];

// }
@Injectable()
export class BusstationService {
  // 두개의 모델링 파일을 주입 하여 데이터 베이스의 컬렉션 2개를 한번에 조회 한다.
  constructor(
    @InjectModel(Bus.name) private readonly busstopModel: Model<BusStopDocument>, @InjectModel(Bus2.name) private readonly bus2Model: Model<Bus2Document>
  ) { }
  //데이터 베이스네서 newBusStop,newBusStopVer2 컬렉션을 조회 하여 controller에게 전달 해준다.
  async findAllBusStops(): Promise<Bus[] & Bus2[]> {
    const rawData = await this.busstopModel.find().exec();
    const busStops2 = await this.bus2Model.find().exec();
    // console.log('rawData:', rawData);
    return [...rawData, ...busStops2];
  }

  async searchBusStops(value: string): Promise<Bus[] & Bus2[]> {
    // console.log(value)
    const rawData = await this.busstopModel.find({ BUSSTOP_NM: value });
    // console.log(typeof(value))
    const busStops2 = await this.bus2Model.find({ BUSSTOP_NM: value })
    // console.log('rawData:', rawData);
    const GPSLONG = "GPS_LONG"
    // console.log(rawData[0])
    // const GPSLATI = rawData[0]? rawData[0];
    // console.log(rawData["GPS_LATI"])
    // console.dir(busStops2)


    return [...rawData, ...busStops2];
  }

  
}