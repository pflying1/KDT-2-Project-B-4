import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Bus,BusStopDocument} from './busstation.model';
@Injectable()
export class BusstationService {
  constructor(
    @InjectModel(Bus.name) private readonly busstopModel: Model<BusStopDocument>,
  ) {}

  async findAllBusStops(): Promise<Bus[]> {
    const rawData = await this.busstopModel.find().exec();
    console.log('rawData:', rawData);
 return rawData;
  }

}